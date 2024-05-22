using VivalliusWebb_Common.Models;
using VivalliusWebb_Server.Entities;
using VivalliusWebb_Services.Interfaces;
using VivalliusWebb_Services.Services;

namespace VivalliusWebb_API;
public static class Statics
{
    public static void ConfigureAutomapper(IServiceCollection services)
    {
        var config = new MapperConfiguration(
            cfg =>
            {
                cfg.CreateMap<Photo, PhotoDTO>()
                    .ForMember(dest => dest.ModelPersonIds,
                        opt => opt.MapFrom(
                            src => src.ModelPersons.Select(
                                e => e.Id)));
                cfg.CreateMap<NewPhotoDTO, Photo>()
                    .ForMember(dest => dest.ModelPersons,
                        opt => opt.MapFrom(
                            src => src.ModelPersonIds));
                cfg.CreateMap<PhotoDTO, Photo>()
                    .ForMember(dest => dest.ModelPersons,
                        opt => opt.MapFrom(
                            src => src.ModelPersonIds));
                cfg.CreateMap<Booking, BookingDTO>().ReverseMap();
                cfg.CreateMap<ModelPerson, ModelPersonDTO>()
                    .ForMember(dest => dest.PhotoIds,
                        opt => opt.MapFrom(
                            src => src.Photos.Select(
                                e => e.Id)));
                cfg.CreateMap<ModelPersonDTO, ModelPerson>()
                    .ForMember(dest => dest.Photos,
                        opt => opt.MapFrom(
                            src => src.PhotoIds));
                cfg.CreateMap<ModelPerson, ModelPersonDTO>()
                    .ForMember(dest => dest.PhotoIds,
                        opt => opt.MapFrom(
                            src => src.Photos.Select(
                                e => e.Id)));
            });
        var mapper = config.CreateMapper();
        services.AddSingleton(mapper);
    }

    public static void RegisterCustomServices(IServiceCollection services)
    {
        services.AddSingleton<SessionService>();
        services.AddHostedService(
            provider => provider.GetRequiredService<SessionService>());
        services.AddScoped<IBouncer, Bouncer>();
    }

    public static void ConfigureCors(IServiceCollection services)
    {
        services.AddCors(opt =>
        {
            opt.AddPolicy("InternalOrigins", builder =>
            {
                string[] origins =
                {
                    "http://localhost:*",
                    "https://localhost:*",
                    "http:vivallius-frontend:*",
                    "https:vivallius-frontend:*"
                };

                builder.WithOrigins(origins);
            });
        });
    }
    public static void DisableCors(IServiceCollection services)
    {
        services.AddCors(opt =>
        {
            opt.AddPolicy("AllowAll", builder =>
            {
                builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
        });
    }
}