using Microsoft.EntityFrameworkCore;
using VivalliusWebb_Server.Entities;

namespace VivalliusWebb_Server;
public class VivalliusContext : DbContext
{
    public DbSet<Photo> Photos => Set<Photo>();
    public DbSet<ModelPerson> ModelPersons => Set<ModelPerson>();
    public VivalliusContext(DbContextOptions<VivalliusContext> options) : base(options) { }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Photo>()
            .HasKey(p => p.Id);

        // Relational configurations
        builder.Entity<Photo>()
            .HasMany(p => p.ModelPersons)
            .WithMany(mp => mp.Photos);
    }
}