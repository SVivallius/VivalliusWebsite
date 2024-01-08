using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using VivalliusWebb_Server;
using VivalliusWebb_Server.Entities;

namespace VivalliusWebb_Services.Services;
public class KeyManagementService
{
    private readonly VivalliusContext _db;
    public KeyManagementService(VivalliusContext db)
    {
        _db = db;
    }

    public async Task<string> GetCurrentKey()
    {
        var entity = await _db.Keys
            .FirstOrDefaultAsync();

        if (entity == null) throw new KeyNotFoundException("No key is saved to the database. Please generate a new key.");
        return entity.Secret;
    }

    public async Task<bool> GenerateNewKey(byte[] seed)
    {
        var currentKey = await _db.Keys
            .FirstOrDefaultAsync();

        var newKey = GenerationAlgorithm(seed);
        newKey.Id = currentKey.Id;
        _db.Keys.Update(newKey);

        if (await _db.SaveChangesAsync() > 0) return true;
        return false;
    }

    private Key GenerationAlgorithm(byte[] seed)
    {
        var newKey = new Key();
        using (HMACSHA256 hmac = new(seed))
        {
            var digest = hmac.ComputeHash(seed);
            newKey.Secret = Convert.ToBase64String(digest);
        }
        return newKey;
    }
}