using AutoMapper;
using VivalliusWebb_Common.DTO_s;
using VivalliusWebb_Server.Entities;

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
            });
        var mapper = config.CreateMapper();
        services.AddSingleton(mapper);
    }

    public static void RegisterCustomServices(IServiceCollection services)
    {

    }
}