using Microsoft.EntityFrameworkCore;
using VivalliusWebb_Server.Entities;

namespace VivalliusWebb_Server;
public class VivalliusContext : DbContext
{
    // Tables
    public DbSet<Photo> Photos => Set<Photo>();
    public DbSet<ModelPerson> ModelPersons => Set<ModelPerson>();
    public DbSet<Key> Keys => Set<Key>();
    public DbSet<Booking> Bookings => Set<Booking>();
    // ctor
    public VivalliusContext(DbContextOptions<VivalliusContext> options) : base(options) { }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // PK's
        builder.Entity<Photo>()
            .HasKey(p => p.Id);
        builder.Entity<ModelPerson>()
            .HasKey(p => p.Id);
        builder.Entity<Key>()
            .HasKey(p => p.Id);
        builder.Entity<Booking>()
            .HasKey(p => p.Id);

        // Relational configurations
        builder.Entity<Photo>()
            .HasMany(p => p.ModelPersons)
            .WithMany(mp => mp.Photos);
    }
}