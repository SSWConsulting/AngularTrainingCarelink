using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Training.Models;

namespace Training.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly ApiContext dbContext;

        public CompaniesController(ApiContext dbContext)
        {
            this.dbContext = dbContext;
        }
        // GET api/values
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Company>), (int)HttpStatusCode.OK)]
        public IActionResult Get()
        {
            return Ok(dbContext.Companies);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetCompany(int id)
        {
            return Ok(dbContext.Companies.FirstOrDefault(x => x.CompanyId == id));
        }

        // POST api/values
        [HttpPost]
        [ProducesResponseType(typeof(Company), (int)HttpStatusCode.Created)]
        public IActionResult Post([FromBody] Company model)
        {
            dbContext.Add(model);
            dbContext.SaveChanges();
            return CreatedAtAction("GetCompany", new { id = model.CompanyId }, new Company { CompanyId = model.CompanyId, CompanyName = "ABC Pty Ltd", Users = new List<User>() });
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Company), (int)HttpStatusCode.OK)]
        public IActionResult Put(int id, [FromBody] Company value)
        {
            dbContext.Update(value);
            return Ok(value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var dat = dbContext.Companies.FirstOrDefault(x => x.CompanyId == id);
            if (dat != null)
            {
                dbContext.Remove(dat);
            }
            return Ok();
        }
    }
}
