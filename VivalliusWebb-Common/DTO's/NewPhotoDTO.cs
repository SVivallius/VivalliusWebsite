using Microsoft.AspNetCore.Http;
using System.Diagnostics.CodeAnalysis;

namespace VivalliusWebb_Common.DTO_s;
public class NewPhotoDTO
{
    public int Id { get; set; }
    public IFormFile Image { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PhotoTaken { get; set; }
    [AllowNull]
    public List<int> ModelPersonIds { get; set; } = new();
}
