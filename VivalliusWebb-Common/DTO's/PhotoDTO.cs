namespace VivalliusWebb_Common.DTO_s;
public class PhotoDTO
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PhotoTaken { get; set; }
    public string PhotoPath { get; set; }
    public List<int> ModelPersonIds { get; set; }
}
