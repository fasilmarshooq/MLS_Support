using manilaxmisilks_api.Helpers;
using manilaxmisilks_api.Models;
using manilaxmisilks_api.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace manilaxmisilks_api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {

        [HttpGet]
        [ActionName("AccessToken")]
        public HttpResponseMessage AccessToken()
        {
            try
            {
                var token = AccessTokenHelper.GetAccessToken();
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(token))
                };
            }
            catch (Exception ex)
            {
               
                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.Message)
                };
            }
        }

        [HttpPost]
        [ActionName("User")]
        public HttpResponseMessage PostUser(UserModel user)
        {
            try
            {
                var isValidToken = AccessTokenHelper.ValidateAccessToken(user.AccessToken);
                if (!isValidToken)
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest)
                    {
                        Content = new StringContent("Invalid access token!")
                    };
                }
                var service = new DbService();
                service.PostUser(user);
                return new HttpResponseMessage(HttpStatusCode.OK);
               
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("Duplicate") && ex.Message.Contains("MobileNumber"))
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest)
                    {
                        Content = new StringContent("Mobile Number already exits please provide a unique Number")
                    };
                }

                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.Message)
                };
            }
        }

        [HttpGet]
        [ActionName("Login")]
        public HttpResponseMessage Login(string userName,string Password)
        {
            try
            {
                var service = new DbService();
                var userData = service.Login(userName, Password);
                if(userData.Name == null)
                {

                    return new HttpResponseMessage(HttpStatusCode.BadRequest)
                    {
                        Content = new StringContent("Incorrect username or password")
                    };

                }
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(userData))
                };
            }
            catch (Exception ex)
            {

                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.Message)
                };
            }
        }

    }
}