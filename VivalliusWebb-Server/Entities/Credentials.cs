using VivalliusWebb_Server.Interfaces;

namespace VivalliusWebb_Server.Entities;

public class Credentials : IEntity
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string PasswordHash { get; set; }
    public byte[] salt { get; set; }
}