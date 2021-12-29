using FitProExercise.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace FitProExercise.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class FtpController : ControllerBase
    {
        ICustomerRepository customerRepository;

        [HttpPost]
        public void addCustomer(customer data)
        {
            customerRepository = new CustomerRepository();
            int resp = customerRepository.Insert(data);
        }

        [HttpGet]
        public IEnumerable<customer> listCustomers(int page)
        {
            customerRepository = new CustomerRepository();
            List<customer> dt_customer = new List<customer>(customerRepository.GetCustomers());
            return dt_customer;
        }

        [HttpPost]
        public void deleteCustomer(customer data)
        {
            customerRepository = new CustomerRepository();
            int resp = customerRepository.Delete(data);
        }
    }
}
