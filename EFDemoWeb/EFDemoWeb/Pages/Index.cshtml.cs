using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using EFDataAccessLibrary.DataAccess;
using EFDataAccessLibrary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EFDemoWeb.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly PeopleContext _db;

        public IndexModel(ILogger<IndexModel> logger, PeopleContext db)
        {
            _logger = logger;
            this._db = db;
        }

        public void OnGet()
        {
            LoadSampleData();

            var people = _db.People
                .Include(p => p.Addresses)
                .Include(p => p.EmailAddresses)
                .Where(x => x.Age >= 18 && x.Age <= 65)
                .ToList();
        }

        private bool ApproveAge(int age)
        {
            return (age >= 18 && age <= 65);
        }

        private void LoadSampleData()
        {
            if(_db.People.Count() == 0)
            {
                string file = System.IO.File.ReadAllText("generated.json");
                var people = JsonSerializer.Deserialize<List<Person>>(file);

                _db.AddRange(people);
                _db.SaveChanges();
            }
        }
    }
}
