using System.Configuration;
using manilaxmisilks_api.Models;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace manilaxmisilks_api.Services
{
    public class DbService
    {
        public List<OrderModel> GetOrders(string orderNumber = "Default")
        {

            var orders = new List<OrderModel>();

            string query = orderNumber.Equals("Default") ?
                           "Select o.Id,o.OrderNumber,o.TrackingNumber,c.Courier,c.courierUrl from orders o join couriers c on o.courierid = c.id" :
                            string.Format("Select o.Id,o.OrderNumber,o.TrackingNumber,c.Courier,c.courierUrl from orders o join couriers c on o.courierid = c.id where o.orderNumber = '{0}' ", orderNumber);

            using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
            using (MySqlCommand command = new MySqlCommand(query, conn))
            {
                conn.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var order = new OrderModel
                            {
                                Id = reader.GetInt32(0),
                                OrderNumber = reader.GetString(1),
                                TrackingNumber = reader.GetString(2),
                                Courier = reader.GetString(3),
                                CourierUrl = reader.GetString(4)
                            };
                            orders.Add(order);
                        }
                        reader.NextResult();
                    }
                }
            }

            return orders;
        }

        public void PostOrders(int Id, string orderNumber, string trackingNumber, string courier)
        {
            string query = Id == 0 ?
                           string.Format("Insert into Orders (OrderNumber,TrackingNumber,CourierId,createdtime) values ('{0}','{1}',(select Id from couriers where Courier='{2}'),current_timestamp());", orderNumber, trackingNumber, courier) :
                            string.Format("update Orders set ordernumber = '{0}',TrackingNumber = '{1}' ,CourierId = (select Id from couriers where Courier='{2}') where id = {3}", orderNumber, trackingNumber, courier, Id);

            ExecuteQuery(query);
        }


        public List<CourierModel> GetCouriers()
        {
            var couriers = new List<CourierModel>();

            const string query = "Select * from couriers;";

            using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
            using (MySqlCommand command = new MySqlCommand(query, conn))
            {
                conn.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var courier = new CourierModel
                            {
                                Id = reader.GetInt32(0),
                                Courier = reader.GetString(1),
                                URL = reader.GetString(2),
                            };
                            couriers.Add(courier);
                        }
                        reader.NextResult();
                    }
                }
            }

            return couriers;
        }

        public List<string> GetProductCategories()
        {
            var categories = new List<string>();

            const string query = "Select Label from productcategories;";
            using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
            using (MySqlCommand command = new MySqlCommand(query, conn))
            {
                conn.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            categories.Add(reader.GetString(0));
                        }
                        reader.NextResult();
                    }
                }
            }

            return categories;
        }

        public List<ProductModel> GetProducts(int Id = -1)
        {
            var Products = new List<ProductModel>();
            var imagerenderUrl = "/FileStore/";
            string query = Id == -1 ?
               "Select p.id,p.productname,p.price,c.Category,t.Tag,p.description,p.IsActive,I.ImageName from  products p inner join productImages i on p.id = i.productid inner join productcategories c on p.CategoryId = c.id inner join producttags t on p.TagId = t.id Where i.id in ( Select i.id from  products p inner join productImages i on p.id = i.productid group by p.id having i.id = min(i.id)) And p.IsActive=1; " :
               string.Format("Select p.id,p.productname,p.price,c.Category,t.Tag,p.description,p.IsActive,I.ImageName from  products p inner join productImages i on p.id = i.productid inner join productcategories c on p.CategoryId = c.id inner join producttags t on p.TagId = t.id Where i.id in ( Select i.id from  products p inner join productImages i on p.id = i.productid group by p.id having i.id = min(i.id)) And p.IsActive=1 And p.id={0}; ", Id);

            var productImageQuery = string.Format("Select Id,ImageName from productimages where productid = {0};", Id);

            using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
            using (MySqlCommand command = new MySqlCommand(query, conn))
            {
                conn.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            var courier = new ProductModel
                            {
                                Id = reader.GetInt32(0),
                                ProductName = reader.GetString(1),
                                Price = reader.GetDecimal(2),
                                Category = reader.GetString(3),
                                Tag = reader.GetString(4),
                                Description = reader.GetString(5),
                                IsActive = reader.GetBoolean(6),
                                MainImageUrl = string.Concat(imagerenderUrl, reader.GetString(7))
                            };
                            Products.Add(courier);
                        }
                        reader.NextResult();
                    }
                }

                if (Id != -1 && Products.Count != 0)
                {
                    command.CommandText = productImageQuery;
                    using (var reader = command.ExecuteReader())
                    {
                        var ImageUrls = new Dictionary<string, string>();
                        while (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                ImageUrls.Add(reader.GetString(0), string.Concat(imagerenderUrl, reader.GetString(1)));
                            }
                            reader.NextResult();
                        }
                        Products[0].Images = ImageUrls;
                    }
                }
            }

            return Products;
        }

        public void PostUser(UserModel user)
        {
            string query = string.Format("Insert into users (Name,MobileNumber,Password,IsAdmin,Createdtime) values ('{0}','{1}','{2}',0,current_timestamp());",user.Name,user.MobileNumber,user.Password);

            ExecuteQuery(query);
        }

        public void UpdateProduct(ProductModel product)
        {
            string query = string.Format("Update Products set ProductName='{0}',Price={1},CategoryId=(Select Id from productcategories where category = '{2}'),TagId=(Select Id from producttags where Tag = '{3}'),Description='{4}' where id = {5};",product.ProductName,product.Price,product.Category,product.Tag,product.Description,product.Id);
            ExecuteQuery(query);
        }

        public UserModel Login(string userName, string password)
        {
            var user = new UserModel();
            string query = string.Format("Select Name,IsAdmin from users where mobilenumber = '{0}' and password = '{1}'; ",userName,password);

            using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
            using (MySqlCommand command = new MySqlCommand(query, conn))
            {
                conn.Open();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.HasRows)
                    {
                        while (reader.Read())
                        {

                            user.Name = reader.GetString(0);
                            user.IsAdmin = reader.GetBoolean(1);
                              
                        
                        }
                        reader.NextResult();
                    }
                }
            }

            return user;

        }
        private static void ExecuteQuery(string query)
        {
            using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
            using (MySqlCommand command = new MySqlCommand(query, conn))
            {
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }
    }
}