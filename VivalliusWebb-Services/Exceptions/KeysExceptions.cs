namespace VivalliusWebb_Services.Exceptions;
public class KeyNotFoundException : Exception
{
    public KeyNotFoundException() { }
    public KeyNotFoundException(string message) : base(message) { }
    public KeyNotFoundException(string message, Exception inner) : base(message, inner) { }
}

public class KeyNotValidException : Exception
{
    public KeyNotValidException() { }
    public KeyNotValidException(string message) : base(message) { }
    public KeyNotValidException(string message, Exception inner) : base(message, inner) { }
}
