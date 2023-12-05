using VivalliusWebb_Server.Interfaces;

namespace VivalliusWebb_Server.Entities;
public class Photo : IEntity
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PhotoTaken { get; set; }
    public Uri PhotoPath { get; set; }
    public List<ModelPerson> ModelPersons { get; set; }
}
