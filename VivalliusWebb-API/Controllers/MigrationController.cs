using Microsoft.AspNetCore.Mvc;

namespace VivalliusWebb_API.Controllers;

[ApiController]
[Route("api/1/[Controller]")]
public class MigrationController
{
    private readonly VivalliusContext _db;
    public MigrationController(VivalliusContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IResult> migrate()
    {
        try
        {
            await _db.Database.MigrateAsync();
            return Results.Ok("Migration successful!");
        }
        catch (Exception)
        {
            return Results.BadRequest();
        }
    }
}
