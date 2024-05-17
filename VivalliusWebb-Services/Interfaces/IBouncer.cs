using VivalliusWebb_Server.Entities;

namespace VivalliusWebb_Services.Interfaces
{
    public interface IBouncer
    {
        Task<bool> AuthenticateAsync(string username, string password);
        bool BounceToken(string token);
        string HashPass(string password, byte[] salt);
        Credentials SaltedEarth(Credentials source);
    }
}