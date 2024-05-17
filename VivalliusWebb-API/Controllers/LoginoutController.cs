using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using VivalliusWebb_API.Controllers.Components;
using VivalliusWebb_Services.Interfaces;
using VivalliusWebb_Services.Services;
namespace VivalliusWebb_API.Controllers;

[Route("api/admin/")]
[ApiController]
public class LoginoutController : ControllerBase
{
    private readonly VivalliusContext _db;
    private readonly IBouncer _bouncer;
    //private readonly SessionService _sessions;

    public LoginoutController(VivalliusContext db, IBouncer bouncer/*, SessionService sessions*/)
    {
        _db = db;
        _bouncer = bouncer;
        //_sessions = sessions;
    }

    //[HttpPost]
    //[Route("login")]
    //public IResult LoginAsync(string username, string password, bool isLong)
    //{
    //    var user = _db.Credentials
    //        .Where(c => c.Username.ToLower().Equals(username.ToLower()))
    //        .FirstOrDefault();

    //    if (user == null)
    //        return Results.NotFound();

    //    string hashPass = _bouncer.HashPass(password, user.salt);

    //    if (!user.PasswordHash.Equals(hashPass, StringComparison.Ordinal))
    //        return Results.Unauthorized();

    //    var session = _sessions.CreateSession(user, isLong);

    //    var response = new VResponse
    //    {
    //        isLoggedIn = true,
    //        token = session.Token,
    //        tokenCreateTime = session.CreatedAt
    //    };
    //    return Results.Ok(JsonSerializer.Serialize(response));
    //}

    //[HttpPost]
    //[Route("logout")]
    //public IResult LogoutAsync(string token)
    //{
    //    if (_sessions.RemoveSession(token))
    //    {
    //        var response = new VResponse
    //        {
    //            isLoggedIn = false,
    //            token = "",
    //            tokenCreateTime = null
    //        };
    //        return Results.Ok(JsonSerializer.Serialize(response));
    //    }
    //    else return Results.NotFound();
    //}
}
