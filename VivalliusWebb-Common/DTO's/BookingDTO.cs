namespace VivalliusWebb_Common.Models;
public class BookingDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Genre { get; set; }
    public string Message { get; set; }
    public bool IsComplete { get; set; } = false;
}
