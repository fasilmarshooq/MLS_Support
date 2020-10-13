using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace manilaxmisilks_api.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string MobileNumber { get; set; }
        public string Password { get; set; }
        public Boolean IsAdmin { get; set; }
        public string AccessToken { get; set; }


    }
}