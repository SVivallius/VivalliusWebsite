using Microsoft.AspNetCore.Mvc;
namespace VivalliusWebb_API.Controllers;

[Route("3/[controller]")]
[ApiController]
public class PhotosController : ControllerBase
{
    private readonly VivalliusContext _db;
    private readonly IMapper _mapper;
    public PhotosController(VivalliusContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IResult> GetAll()
    {
        var entities = await _db.Photos
            .ToListAsync();
        var Dtos = _mapper.Map<List<PhotoDTO>>(entities);
        return Results.Ok(Dtos);
    }
}
