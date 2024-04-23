using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Security.Cryptography;
using VivalliusWebb_Server;
using VivalliusWebb_Services.Interfaces;
namespace VivalliusWebb_Services.Services;
public class Bouncer : IBouncer
{
    private HMACSHA256 hmac;
    private readonly VivalliusContext _db;
    public Bouncer(VivalliusContext db)
    {
        hmac = new HMACSHA256();
        _db = db;
    }
    public async Task<bool> Bounce(string payloadAsJson, string signature)
    {
        var key = await _db.Keys
            .Select(k => k.Secret)
            .FirstOrDefaultAsync();
        byte[] keyAsBytes = Encoding.UTF8.GetBytes(key);
        hmac.Key = keyAsBytes;
        return signature.Equals(Validate(payloadAsJson));
    }
    private string Validate(string payloadAsJson)
    {
        byte[] payloadAsByteArray = Encoding.UTF8.GetBytes(payloadAsJson);
        var digest = hmac.ComputeHash(payloadAsByteArray);
        return Convert.ToBase64String(digest);
    }
}
