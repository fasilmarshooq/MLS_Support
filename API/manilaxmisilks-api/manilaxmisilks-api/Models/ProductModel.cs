using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace manilaxmisilks_api.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Tag { get; set; }
        public bool IsActive { get; set; }

        public Dictionary<string,string> Images { get; set; }

        public string MainImageUrl { get; set; }
    }

}