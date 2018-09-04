using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NSwag.AspNetCore;
using Training.Models;

namespace Training
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase("mocked_data"));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ApiContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseStaticFiles();
            app.UseSwaggerUi3(settings =>
                {
                    settings.SwaggerUiRoute = "/docs";
                    settings.SwaggerRoute = "/docs/swagger.json";
                });

            SeedTestData(context);
            app.UseMvc();
        }

        private static void SeedTestData(ApiContext context)
        {
            context.Users.Add(new User
            {
                UserId = 1,
                FirstName = "Luke",
                LastName = "Skywalker"
            });

            context.Users.Add(new User
            {
                UserId = 2,
                FirstName = "Anthony",
                LastName = "Nguyen"
            });

            context.Users.Add(new User
            {
                UserId = 3,
                FirstName = "SSw",
                LastName = "test"
            });

            context.Companies.Add(new Company
            {
                CompanyId = 1,
                CompanyName = "SSW",
                Address = "Frankston",
                Users = new List<User>()
            });

            context.SaveChanges();
        }
    }
}
