namespace VivalliusWebb_Common.Models;
public class ModelPersonDTO
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public List<int> PhotoIds { get; set; }
}
