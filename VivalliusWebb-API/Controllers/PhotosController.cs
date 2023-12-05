using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VivalliusWebb_Server;
namespace VivalliusWebb_API.Controllers;

[Route("3/[controller]")]
[ApiController]
public class PhotosController : ControllerBase
{
    private readonly VivalliusContext _db;
    public PhotosController(VivalliusContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IResult> GetAll()
    {

    }
}
