using System.Configuration;
using devtools_api.Models;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace devtools_api.Services
{
    public class DbService
    {
        private readonly string _connectionString = ConfigurationManager.ConnectionStrings["AutomationRepository"]?.ConnectionString;

        public List<OrderModel> GetOrders(string orderNumber = "Default")
        {

            var orders = new List<OrderModel>();

            string query = orderNumber.Equals("Default") ?
                           "Select o.Id,o.OrderNumber,o.TrackingNumber,c.Courier,c.courierUrl from orders o join couriers c on o.courierid = c.id" :
                            string.Format("Select o.Id,o.OrderNumber,o.TrackingNumber,c.Courier,c.courierUrl from orders o join couriers c on o.courierid = c.id where o.orderNumber = '{0}' ", orderNumber);

            using (MySqlConnection conn = new MySqlConnection(_connectionString))
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
            string query = Id==0 ?
                           string.Format("Insert into Orders (OrderNumber,TrackingNumber,CourierId,createdtime) values ('{0}','{1}',(select Id from couriers where Courier='{2}'),current_timestamp());", orderNumber,trackingNumber,courier) :
                            string.Format("update Orders set ordernumber = '{0}',TrackingNumber = '{1}' ,CourierId = (select Id from couriers where Courier='{2}') where id = {3}", orderNumber,trackingNumber, courier,Id);

            using (MySqlConnection conn = new MySqlConnection(_connectionString))
            using (MySqlCommand command = new MySqlCommand(query, conn))
            {
                command.Connection.Open();
                command.ExecuteNonQuery();
            }
        }

        public List<CourierModel> GetCouriers()
        {
            var couriers = new List<CourierModel>();

            const string query = "Select * from couriers;";

            using (MySqlConnection conn = new MySqlConnection(_connectionString))
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
    }
}