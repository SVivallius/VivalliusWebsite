namespace VivalliusWebb_Services.Services.Objects;
public class Session
{
    public DateTime CreatedAt { get; set; }
    public DateTime LastUsed { get; set; }
    public bool isLongSession { get; set; } = false;
    public string Token { get; set; }
}
