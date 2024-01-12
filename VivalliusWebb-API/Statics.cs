using AutoMapper;
using VivalliusWebb_Common.DTO_s;
using VivalliusWebb_Common.Models;
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

    }
}