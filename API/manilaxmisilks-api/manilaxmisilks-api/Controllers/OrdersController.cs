using manilaxmisilks_api.Services;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace manilaxmisilks_api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class OrdersController : ApiController
    {
        [HttpGet]
        [ActionName("Orders")]
        public HttpResponseMessage Orders()
        {
            try
            {
                var service = new DbService();
                var serviceResult = service.GetOrders();
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(serviceResult))
                };
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.StackTrace)
                };

            }

           
        }

        [HttpGet]
        [ActionName("Orders")]
        public HttpResponseMessage Orders(string orderNumber)
        {
            try
            {
                var service = new DbService();
                var serviceResult = service.GetOrders(orderNumber);
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(serviceResult))
                };
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.StackTrace)
                };

            }


        }

        [HttpPost]
        [ActionName("Orders")]
        public HttpResponseMessage PostOrders(int Id,string orderNumber,string trackingNumber,string courier)
        {
            try
            {
                var service = new DbService();
                service.PostOrders(Id,orderNumber,trackingNumber,courier);
                return new HttpResponseMessage(HttpStatusCode.OK);
               
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.StackTrace)
                };

            }


        }

        [HttpGet]
        [ActionName("Couriers")]
        public HttpResponseMessage Couriers()
        {
            try
            {
                var service = new DbService();
                var serviceResult = service.GetCouriers();
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(serviceResult))
                };
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.StackTrace)
                };

            }


        }


    }
}
