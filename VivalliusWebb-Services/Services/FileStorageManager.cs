using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace VivalliusWebb_Services.Services;
public class FileStorageManager : IDisposable
{
    private string basePath = $"./assets";
    private IFormFile _file;
    private bool disposedValue;

    private readonly ILogger<FileStorageManager> _logs;
    public FileStorageManager(ILogger<FileStorageManager> logs)
    {
        _logs = logs;
    }

    public void Initialize(IFormFile file)
    {
        _file = file;
    }

    public async Task<string> SaveImageAsync()
    {
        string filePath = String.Empty;
        int iteration = 0;
        bool isSuccessfullySaved = false;
        while (!isSuccessfullySaved)
        {
            try
            {
                if (!Directory.Exists($"{basePath}/img/"))
                {
                    Directory.CreateDirectory($"{basePath}/img/");
                }
                filePath = (iteration == 0) ?
                    $"{basePath}/img/{_file.FileName}" : $"{basePath}/img/{_file.FileName}_{iteration}";
                isSuccessfullySaved = await TryPerformSaveAsync(filePath);
            }
            catch (Exception ex)
            {
                _logs.LogCritical(ex.Message);
                iteration++;
            }
        }
        return filePath;
    }

    public void DeleteImage(string fileName)
    {
        if (File.Exists(basePath + fileName))
            File.Delete(fileName);
    }

    private async Task<bool> TryPerformSaveAsync(string filePath)
    {
        using (FileStream fs = new FileStream(filePath, FileMode.CreateNew, FileAccess.ReadWrite))
        {
            await _file.CopyToAsync(fs);
            fs.Position = 0;
            await fs.FlushAsync();

            return true;
        }
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!disposedValue)
        {
            if (disposing)
            {
                // TODO: dispose managed state (managed objects)
                basePath = "";
            }

            // TODO: free unmanaged resources (unmanaged objects) and override finalizer
            // TODO: set large fields to null
            disposedValue = true;
        }
    }

    // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
    // ~FileStorageService()
    // {
    //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
    //     Dispose(disposing: false);
    // }

    public void Dispose()
    {
        // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        Dispose(disposing: true);
        GC.SuppressFinalize(this);
    }
}
