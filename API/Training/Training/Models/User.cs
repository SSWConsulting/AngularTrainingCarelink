using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Training.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public Company Company { get; set; }
    }

    public class Company
    {
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public List<User> Users { get; set; }
    }
}
