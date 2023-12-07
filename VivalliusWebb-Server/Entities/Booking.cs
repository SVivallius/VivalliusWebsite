using VivalliusWebb_Server.Interfaces;
namespace VivalliusWebb_Server.Entities;
public class Booking : IEntity
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Message { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public bool IsComplete { get; set; } = false;
}
