using Microsoft.Extensions.Hosting;
using System.Security.Cryptography;
using VivalliusWebb_Server.Entities;
using VivalliusWebb_Services.Services.Objects;

namespace VivalliusWebb_Services.Services;
public class SessionService : IHostedService
{
    private List<Session> _sessions = new List<Session>();

    public SessionService()
    {
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        Task.Run(() =>
        {
            while (true)
            {
                if (cancellationToken.IsCancellationRequested)
                    break;
                foreach (var session in _sessions)
                {
                    if (!CheckValidity(session))
                        _sessions.Remove(session);
                }
            }
        });
        return Task.CompletedTask;
    }

    private bool CheckValidity(Session session)
    {
        if (session.LastUsed.AddHours(24) > DateTime.Now)
            return true;

        if (!session.isLongSession)
            return false;

        if (session.LastUsed.AddDays(30) > DateTime.Now)
            return true;

        return false;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        foreach (var session in _sessions)
        {
            _sessions.Remove(session);
        }
        return Task.CompletedTask;
    }
    public bool IsSession(string token)
    {
        var session = _sessions
            .Where(s => s.Token.Equals(token))
            .FirstOrDefault();
        return session != null;
    }

    public Session CreateSession(Credentials login, bool isLong)
    {
        var session = new Session
        {
            CreatedAt = DateTime.Now,
            LastUsed = DateTime.Now,
            isLongSession = isLong,
            Token = CreateToken(login.Username)
        };

        _sessions.Add(session);
        return session;
    }

    private string CreateToken(string username)
    {
        string token = string.Empty;
        var key = UTF8Encoding.UTF8.GetBytes(username);
        var log = UTF8Encoding.UTF8.GetBytes(DateTime.Now.ToString());

        using (var hmac = new HMACSHA256(key))
        {
            using MemoryStream MEM = new MemoryStream(log);
            MEM.Position = 0;
            var digest = hmac.ComputeHash(MEM);
            token = UTF8Encoding.UTF8.GetString(digest);
        }
        return token;
    }

    public bool RemoveSession(string token)
    {
        var session = _sessions
            .Where(s => s.Token.Equals(token))
            .FirstOrDefault();

        if (session != null)
        {
            _sessions.Remove(session);
            return true;
        }
        else return false;
    }

}
