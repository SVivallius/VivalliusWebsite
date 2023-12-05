using VivalliusWebb_Server.Interfaces;

namespace VivalliusWebb_Server.Entities;
public class ModelPerson : IEntity
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public List<Photo> Photos { get; set; } = new List<Photo>();
}
