using AutoMapper;

namespace VivalliusWebb_API;
public static class Statics
{
    public static void ConfigureAutomapper(IServiceCollection services)
    {
        var config = new MapperConfiguration(
            cfg =>
            {

            });
        var mapper = config.CreateMapper();
        services.AddSingleton(mapper);
    }

    public static void RegisterCustomServices(IServiceCollection services)
    {

    }
}