using Dapper;
using FitProExercise.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FitProExercise
{
    public class CustomerRepository : ICustomerRepository
    {
        public int Delete(customer customer)
        {
            using IDbConnection db = new SqlConnection(AppConnection.ConnectionString);
            if (db.State == ConnectionState.Closed)
                db.Open();
            string query = "delete from customer where name = '" +
                customer.name + "' and phone = '" +
                customer.phone + "' and email = '" +
                customer.email + "' and notes = '" +
                customer.notes + "';";
            return db.Execute(query);
        }

        public IEnumerable<customer> GetCustomers()
        {
            using IDbConnection db = new SqlConnection(AppConnection.ConnectionString);
            if (db.State == ConnectionState.Closed)
                db.Open();
            return db.Query<customer>("select * from customer", commandType: CommandType.Text);
        }

        public int Insert(customer customer)
        {
            using IDbConnection db = new SqlConnection(AppConnection.ConnectionString);
            if (db.State == ConnectionState.Closed)
                db.Open();
            string query = "insert into customer (name, phone, email, notes) values ('" +
                customer.name + "','" +
                customer.phone + "','" +
                customer.email + "','" +
                customer.notes + "');";
            return db.Execute(query);
        }
    }
}
