using Microsoft.AspNetCore.Mvc;
using VivalliusWebb_Server.Entities;
using VivalliusWebb_Services.Interfaces;
using VivalliusWebb_Services.Services;
namespace VivalliusWebb_API.Controllers;

[ApiController]
[Route("api/1/")]
public class PhotosController : ControllerBase
{
    private readonly VivalliusContext _db;
    private readonly IMapper _mapper;
    private readonly IBouncer _bouncer;
    private readonly FileStorageManager fs;
    public PhotosController(VivalliusContext db, IMapper mapper, IBouncer bouncer, FileStorageManager fs)
    {
        _db = db;
        _mapper = mapper;
        _bouncer = bouncer;
        this.fs = fs;
    }

    [Route("public/[controller]")]
    [HttpGet]
    public async Task<IResult> GetAll()
    {
        var entities = await _db.Photos
            .ToListAsync();
        if (entities == null || entities.Count == 0) return Results.Ok(new List<PhotoDTO>());
        var Dtos = _mapper.Map<List<PhotoDTO>>(entities);
        return Results.Ok(Dtos);
    }
    [Route("public/[controller]/{Id}")]
    [HttpGet]
    public async Task<IResult> GetById(int Id)
    {
        var entity = await _db.Photos
            .Include(p => p.ModelPersons)
            .Where(p => p.Id.Equals(Id))
            .FirstOrDefaultAsync();
        
        if (entity == null) return Results.NotFound();
        return Results.Ok(_mapper.Map<PhotoDTO>(entity));
    }

    //******************** ADMIN SECTION ********************
    // ADD SECURITY TO THE FOLLOWING SECTION ONCE IT WORKS
    //*******************************************************

    [Route("admin/[controller]")]
    [HttpPost]
    public async Task<IResult> PostAsync([FromForm]NewPhotoDTO photo)
    {
        // TODO: Add security
        string filePath = String.Empty;
        fs.Initialize(photo.Image);
        try
        {
            // Add FileSave struct
            filePath = await fs.SaveImageAsync();
            // Add SQL add struct
            var entity = _mapper.Map<Photo>(photo);
            entity.PhotoPath = $"{photo.Image.FileName}";
            if (photo.ModelPersonIds != null && photo.ModelPersonIds.Count > 0)
            {
                List<ModelPerson> tempStorage = await _db.ModelPersons
                    .Where(e => photo.ModelPersonIds
                    .Contains(e.Id))
                    .ToListAsync();
                entity.ModelPersons = tempStorage;
            }
            await _db.Photos.AddAsync(entity);

            var node = typeof(Photo).Name.ToLower();
            // Add error handling struct

            // Return data according to success or fail
            if (await _db.SaveChangesAsync() > 0) return Results.Created($"1/public/{node}/{entity.Id}", entity);
            fs.DeleteImage(photo.Image.Name);
            return Results.BadRequest();
        }
        catch (Exception)
        {
            throw;
        }
    }
    [HttpPut]
    [Route("admin/[controller]/{Id}")]
    public async Task<IResult> UpdateAsync(int Id, [FromForm]PhotoDTO dto)
    {
        var isInDatabase = await _db.Photos
            .Where(p => p.Id.Equals(Id))
            .FirstOrDefaultAsync();
        if (isInDatabase == null) return Results.NotFound();
        try
        {
            var entity = _mapper.Map<Photo>(dto);
            _db.Photos.Update(entity);
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

        var entity = await _db.Photos
            .Where(e => e.Id.Equals(Id))
            .FirstOrDefaultAsync();

        if (entity == null) return Results.NotFound();

        try
        {
            _db.Photos.Remove(entity);
            if (await _db.SaveChangesAsync() > 0)
            {
                System.IO.File.Delete(entity.PhotoPath);
                return Results.NoContent();
            }
            return Results.BadRequest();
        }
        catch (Exception)
        {
            throw;
        }
    }
}
