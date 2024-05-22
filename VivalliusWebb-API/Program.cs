using VivalliusWebb_Services.Services;

namespace VivalliusWebb_API;
public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers(opt =>
        {
            opt.AllowEmptyInputInBodyModelBinding = true;
        });

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        Statics.RegisterCustomServices(builder.Services);
        Statics.ConfigureAutomapper(builder.Services);

        // Add Cors-policies
        // TO-DO: Create actual Cors-rules
        Statics.DisableCors(builder.Services);

        string? connString = builder.Configuration.GetConnectionString("Connection");

        builder.Services.AddDbContext<VivalliusContext>(
            opt => opt.UseMySql(connString, ServerVersion.AutoDetect(connString)));

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        //app.UseSwagger();
        //app.UseSwaggerUI();

        //app.UseHttpsRedirection();
        //app.UseAuthorization();
        app.UseCors("AllowAll");
        app.MapControllers();
        app.Run();
    }
}