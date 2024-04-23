using Microsoft.AspNetCore.Mvc;
using VivalliusWebb_Common.Models;
using VivalliusWebb_Server.Entities;
using VivalliusWebb_Services.Interfaces;

namespace VivalliusWebb_API.Controllers;
[ApiController]
[Route("api/1/")]
public class ModelPersonController : ControllerBase
{
    private readonly VivalliusContext _db;
    private readonly IMapper _mapper;
    private readonly IBouncer _bouncer;
    public ModelPersonController(VivalliusContext db, IMapper mapper, IBouncer bouncer)
    {
        _db = db;
        _mapper = mapper;
        _bouncer = bouncer;
    }

    [HttpGet]
    [Route("public/[controller]")]
    public async Task<IResult> GetAsync()
    {
        var entities = await _db.ModelPersons
            .ToListAsync();

        if (entities.Count == 0) return Results.Ok(new List<ModelPersonDTO>());
        var dtos = _mapper.Map<List<ModelPersonDTO>>(entities);

        return Results.Ok(dtos);
    }
    [HttpGet]
    [Route("public/[controller]/{Id}")]
    public async Task<IResult> GetByIdAsync(int Id)
    {
        var entity = await _db.ModelPersons
            .Include(mp => mp.Photos)
            .Where(mp => mp.Id.Equals(Id))
            .SingleOrDefaultAsync();
        if (entity == null) return Results.NotFound();
        return Results.Ok(_mapper.Map<ModelPersonDTO>(entity));
    }
    //******************** ADMIN SECTION ********************
    // ADD SECURITY TO THE FOLLOWING SECTION ONCE IT WORKS
    //*******************************************************
    [HttpPost]
    [Route("admin/[controller]")]
    public async Task<IResult> PostAsync([FromForm]ModelPersonDTO dto)
    {
        try
        {
            var entity = _mapper.Map<ModelPerson>(dto);
            var newEntry = await _db.ModelPersons.AddAsync(entity);

            if (await _db.SaveChangesAsync() > 0)
            {
                var node = typeof(ModelPerson).Name.ToLower();
                return Results.Created($"1/public/{node}/{entity.Id}", entity);
            }
            return Results.BadRequest();
        }
        catch (Exception)
        {
            throw;
        }
    }
    [HttpPut]
    [Route("admin/[controller]/{Id}")]
    public async Task<IResult> PutAsync(int Id, [FromForm]ModelPersonDTO dto)
    {
        var isInDb = (await _db.ModelPersons.Where(e => e.Id.Equals(Id)).FirstOrDefaultAsync() != null) ?
            true : false;
        if (!isInDb) return Results.NotFound();

        try
        {
            var entity = _mapper.Map<ModelPerson>(dto);
            _db.ModelPersons.Update(entity);

            if (await _db.SaveChangesAsync() > 0) return Results.NoContent();
            return Results.BadRequest();
        }
        catch (Exception)
        {
            throw;
        }
    }
    [HttpDelete]
    [Route("admin/[controller]/{Id}")]
    public async Task<IResult> DeleteAsync(int Id)
    {
        try
        {
            var entity = _db.ModelPersons
                .FindAsync(Id).Result;
            if (entity == null) return Results.NotFound();
            _db.ModelPersons.Remove(entity);

            if (await _db.SaveChangesAsync() > 0) return Results.NoContent();
            return Results.BadRequest();
        }
        catch (Exception)
        {

            throw;
        }
    }
}
