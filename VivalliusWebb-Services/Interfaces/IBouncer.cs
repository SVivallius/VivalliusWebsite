namespace VivalliusWebb_Services.Interfaces
{
    public interface IBouncer
    {
        Task<bool> Bounce(string payloadAsJson, string signature);
    }
}