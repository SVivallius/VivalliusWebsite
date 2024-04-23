using MySql.Data.MySqlClient;

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
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        Statics.RegisterCustomServices(builder.Services);
        Statics.ConfigureAutomapper(builder.Services);

        // Add Cors-policies
        Statics.DisableCors(builder.Services);

        string connString = builder.Environment.IsDevelopment() ?
            builder.Configuration.GetConnectionString("Development") : builder.Configuration.GetConnectionString("Production");

        builder.Services.AddDbContext<VivalliusContext>(
            opt => opt.UseMySql(connString, ServerVersion.AutoDetect(connString)));

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        app.UseSwagger();
        app.UseSwaggerUI();

        //app.UseHttpsRedirection();
        //app.UseAuthorization();
        app.UseCors("AllowAll");


        app.MapControllers();
        app.Map("/healthcheck", async context =>
        {
            
        });

        app.Run();
    }
}