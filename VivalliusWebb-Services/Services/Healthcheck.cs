using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MySql.Data.MySqlClient;

namespace VivalliusWebb_Services.Services;
public class Healthcheck
{
    private Dictionary<string, bool> _checks = new();
    public readonly string _connectionStringSql = "";
    private readonly IServiceProvider _services;
    public Healthcheck(string SqlConnString, IServiceProvider services)
    {
        _connectionStringSql = SqlConnString;
        _services = services;
    }

    public async Task<Dictionary<string, bool>> PerformHealthcheckAsync()
    {
        Console.WriteLine("\tStarting healthcheck...");
        _checks.Append(await TestSqlConnection());
    }

    private async Task<KeyValuePair<string, bool>> TestSqlConnection()
    {
        Console.Write("\tTesting Database connection:\t");
        using (var sql = new MySqlConnection(_connectionStringSql))
        {
            try
            {
                await sql.PingAsync();
                await sql.OpenAsync();
                await sql.ChangeDatabaseAsync("vivallius");
                Console.WriteLine("Success");
                await sql.CloseAsync();

                return new KeyValuePair<string, bool>("Database", true);
            }
            catch (Exception)
            {
                Console.WriteLine("Failed");
                return new KeyValuePair<string, bool>("Database", false);
            }
        }
    }
    
}
