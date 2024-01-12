using Microsoft.AspNetCore.Http;

namespace VivalliusWebb_Services.Services;
public class FileStorageManager : IDisposable
{
    private string basePath = $"./assets";
    private IFormFile _file;
    private bool disposedValue;
    public FileStorageManager(IFormFile file)
        => _file = file;

    public async Task<string> SaveImageAsync()
    {
        string filePath = String.Empty;
        int iteration = 0;
        bool isSuccessfullySaved = false;
        while (!isSuccessfullySaved)
        {
            try
            {
                filePath = (iteration == 0) ?
                    $"{basePath}/img/{_file.FileName}" : $"{basePath}/img/{_file.FileName}({iteration})";
                isSuccessfullySaved = await TryPerformSaveAsync(filePath);
            }
            catch (Exception)
            {
                iteration++;
            }
        }
        return filePath;
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
