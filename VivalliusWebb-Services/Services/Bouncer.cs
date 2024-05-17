using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using VivalliusWebb_Server;
using VivalliusWebb_Server.Entities;
using VivalliusWebb_Services.Interfaces;

namespace VivalliusWebb_Services.Services;

public class Bouncer : IBouncer
{
    private readonly SessionService _sessions;
    private readonly VivalliusContext _db;
    
    public Bouncer(SessionService sessions, VivalliusContext db)
    {
        _sessions = sessions;
        _db = db;
    }
    public async Task<bool> AuthenticateAsync(string username, string password)
    {
        var creds = await _db.Credentials
            .Where(c => c.Username.Equals(username))
            .FirstOrDefaultAsync();

        if (creds == null) return false;
        string provided = HashPass(password, creds.salt);
        if (provided.Equals(creds.PasswordHash))
            return true;
        return false;
    }

    public bool BounceToken(string token)
    {
        var session = _sessions.GetSessionFromToken(token);
        if (session == null) return false;
        return true;
    }

    public string HashPass(string password, byte[] salt)
    {
        var PassBytes = Encoding.UTF8.GetBytes(password);
        var combined = PassBytes.Concat(salt).ToArray();

        using var hmac = new HMACSHA256();
        var digest = hmac.ComputeHash(combined);

        return Encoding.UTF8.GetString(digest);
    }

    public Credentials SaltedEarth(Credentials source)
    {
        source.salt = AddSalt();
        return source;
    }
    private byte[] AddSalt()
    {
        using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
        {
            byte[] salt = new byte[16];
            rng.GetBytes(salt);
            return salt;
        }
    }
}
