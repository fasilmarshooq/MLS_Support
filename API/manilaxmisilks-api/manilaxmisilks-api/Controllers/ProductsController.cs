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
    public class ProductsController : ApiController
    {

        [HttpPost]
        [ActionName("Products")]
        public HttpResponseMessage PostProduct(ProductModel product)
        {
            try
            {
                if (product.Id == 0)
                {
                    var service = new ProductTransactionService();
                    service.CreateProduct(product);
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    var service = new DbService();
                    service.UpdateProduct(product);
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }

            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.Message)
                };
            }
        }
        [HttpGet]
        [ActionName("Products")]
        public HttpResponseMessage Products()
        {
            try
            {
                var service = new DbService();
                var serviceResult = service.GetProducts();
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(serviceResult))
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

        [HttpGet]
        [ActionName("Products")]
        public HttpResponseMessage Products(int Id)
        {
            try
            {
                var service = new DbService();
                var serviceResult = service.GetProducts(Id);
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(serviceResult))
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
        [ActionName("DeleteProduct")]
        public HttpResponseMessage DeleteProduct(int Id)
        {
            try
            {
                var service = new ProductTransactionService();
                service.DeleteProduct(Id);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent(ex.Message)
                };
            }
        }


        [HttpGet]
        [ActionName("Categories")]
        public HttpResponseMessage Categories()
        {
            try
            {
                var service = new DbService();
                var serviceResult = service.GetProductCategories();
                return new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonConvert.SerializeObject(serviceResult))
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