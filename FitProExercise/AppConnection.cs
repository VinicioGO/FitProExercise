using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace FitProExercise
{
    public static class AppConnection
    {
        public static string ConnectionString => "Data Source=TLC-SAE-SIS-14\\SQLEXPRESS;Initial Catalog=DemoSample; Integrated Security=True";
    }
}
