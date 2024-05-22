namespace VivalliusWebb_API.Controllers.Components;
public class VResponse
{
    public bool isLoggedIn { get; set; }
    public string token { get; set; }
    public DateTime? tokenCreateTime { get; set; }
}
