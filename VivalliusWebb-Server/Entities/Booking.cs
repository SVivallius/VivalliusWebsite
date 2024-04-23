using VivalliusWebb_Server.Interfaces;
namespace VivalliusWebb_Server.Entities;
public class Booking : IEntity
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Genre { get; set; }
    public string Message { get; set; }
    public bool IsComplete { get; set; } = false;
}
