using manilaxmisilks_api.Services;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;

namespace manilaxmisilks_api
{
    public static class WebApiConfig
    {
        public static string FileStorePath { get; set; }
        public static string ConnectionString { get; set; }

        public static void Register(HttpConfiguration config)
        {
            ConnectionString = ConfigurationManager.ConnectionStrings["AutomationRepository"]?.ConnectionString;
            FileStorePath = WebConfigurationManager.AppSettings["fileStorageRootPath"];

            config.EnableCors();
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
