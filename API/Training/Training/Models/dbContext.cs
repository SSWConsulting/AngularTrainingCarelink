using Microsoft.EntityFrameworkCore;
namespace Training.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Company> Companies { get; set; }
    }
}
