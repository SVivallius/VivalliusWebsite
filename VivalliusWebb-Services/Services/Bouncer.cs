using System.Security.Cryptography;
namespace VivalliusWebb_Services.Services;
public class Bouncer
{
    private HMACSHA256 hmac;
    public Bouncer(string key)
    {
        byte[] keyAsBytes = Encoding.UTF8.GetBytes(key);
        hmac = new HMACSHA256(keyAsBytes);
    }
    //private bool Validate(string key)
    //{

    //}
}
