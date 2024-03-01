using Microsoft.AspNetCore.Mvc;
using VivalliusWebb_Common.Models;
using VivalliusWebb_Server.Entities;
using VivalliusWebb_Services.Interfaces;

namespace VivalliusWebb_API.Controllers;
[ApiController]
[Route("api/1/")]
public class BookingController : ControllerBase
{
    private readonly VivalliusContext _db;
    private readonly IMapper _mapper;
    private readonly IBouncer _bouncer;

    public BookingController(VivalliusContext db, IMapper mapper, IBouncer bouncer)
    {
        _db = db;
        _mapper = mapper;
        _bouncer = bouncer;
    }

    [HttpPost]
    [Route("public/[controller]")]
    public async Task<IResult> PostAsync([FromBody]BookingDTO formData)
    {
        try
        {
            var entity = _mapper.Map<Booking>(formData);
            await _db.Bookings.AddAsync(entity);

            if (await _db.SaveChangesAsync() > 0)
            {

                var node = typeof(Booking).Name.ToLower();
                return Results.NoContent();
            }
            return Results.BadRequest();
        }
        catch (Exception)
        {
            throw;
        }
    }

    //******************** ADMIN SECTION ********************
    // ADD SECURITY TO THE FOLLOWING SECTION ONCE IT WORKS
    //*******************************************************

    [HttpGet]
    [Route("admin/[controller]")]
    public async Task<IResult> GetAsync()
    {
        var entities = await _db.Bookings.ToListAsync();
        var dtos = _mapper.Map<List<BookingDTO>>(entities);
        return Results.Ok(dtos);
    }

    [HttpGet]
    [Route("admin/[controller]/{Id}")]
    public async Task<IResult> GetByIdAsync(int Id)
    {
        var entity = await _db.Bookings
            .Where(e => e.Id.Equals(Id))
            .FirstOrDefaultAsync();

        if (entity == null) return Results.NotFound();
        var dto = _mapper.Map<BookingDTO>(entity);
        return Results.Ok(dto);
    }
    [HttpDelete]
    [Route("admin/[controller]/{Id}")]
    public async Task<IResult> DeleteAsync(int Id)
    {
        var entity = await _db.Bookings
            .Where(e => e.Id.Equals(Id))
            .FirstOrDefaultAsync();
        if (entity == null) return Results.NotFound();
        try
        {
            _db.Bookings.Remove(entity);
            if (await _db.SaveChangesAsync() > 0) return Results.NoContent();
            return Results.BadRequest();
        }
        catch (Exception)
        {

            throw;
        }
    }
}
