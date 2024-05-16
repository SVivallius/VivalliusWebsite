using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using VivalliusWebb_Server;
using VivalliusWebb_Server.Entities;

namespace VivalliusWebb_Services.Services;

public class Bouncer
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

    private string HashPass(string password, byte[] salt)
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
    // YOU ARE HERE
    private byte[] AddSalt()
    {

    }
}
