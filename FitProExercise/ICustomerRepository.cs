using FitProExercise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitProExercise
{
    public interface ICustomerRepository
    {
        IEnumerable<customer> GetCustomers();
        int Insert(customer customer);
        int Delete(customer customer);
    }
}
