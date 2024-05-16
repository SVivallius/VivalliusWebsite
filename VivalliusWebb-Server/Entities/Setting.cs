using VivalliusWebb_Server.Interfaces;

namespace VivalliusWebb_Server.Entities;

public class Setting : IEntity
{
    public int Id { get; set; }
    public string Email { get; set; }

}
