﻿using Microsoft.AspNetCore.Mvc;
using VivalliusWebb_Server.Entities;
using VivalliusWebb_Services.Interfaces;
using VivalliusWebb_Services.Services;
namespace VivalliusWebb_API.Controllers;

[ApiController]
public class PhotosController : ControllerBase
{
    private readonly VivalliusContext _db;
    private readonly IMapper _mapper;
    private readonly IBouncer _bouncer;
    public PhotosController(VivalliusContext db, IMapper mapper, IBouncer bouncer)
    {
        _db = db;
        _mapper = mapper;
        _bouncer = bouncer;
    }

    [Route("1/public/[controller]")]
    [HttpGet]
    public async Task<IResult> GetAll()
    {
        var entities = await _db.Photos
            .ToListAsync();
        var Dtos = _mapper.Map<List<PhotoDTO>>(entities);
        return Results.Ok(Dtos);
    }
    [Route("1/public/[controller]/{Id}")]
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

    [Route("1/admin/[controller]")]
    [HttpPost]
    public async Task<IResult> PostAsync([FromForm]NewPhotoDTO photo)
    {
        // TODO: Add security
        try
        {
            // Add FileSave struct
            string filePath = String.Empty;
            using (FileStorageManager fs = new(photo.Image))
            {
                filePath = await fs.SaveImageAsync();
            };
            // Add SQL add struct
            var entity = _mapper.Map<Photo>(photo);
            entity.PhotoPath = filePath;
            await _db.Photos.AddAsync(entity);

            var node = typeof(Photo).Name.ToLower();
            // Add error handling struct

            // Return data according to success or fail
            if (await _db.SaveChangesAsync() > 0) return Results.Created($"1/public/{node}/{entity.Id}", entity);
            return Results.BadRequest();
        }
        catch (Exception)
        {
            throw;
        }
    }
    [HttpPut]
    [Route("1/admin/[controller]/{Id}")]
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
    [Route("1/admin/[controller]/{Id}")]
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
