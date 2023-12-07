using System.Security.Cryptography;
using VivalliusWebb_Server;

namespace VivalliusWebb_Services.Services;
public class KeyManagementService
{
    private readonly VivalliusContext _db;
    public KeyManagementService(VivalliusContext db)
    {
        _db = db;
    }

    public void test()
    {
        
    }
}