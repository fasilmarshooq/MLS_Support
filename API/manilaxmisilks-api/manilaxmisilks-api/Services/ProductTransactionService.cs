using manilaxmisilks_api.Helpers;
using manilaxmisilks_api.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;
using System.Web;

namespace manilaxmisilks_api.Services
{
    public class ProductTransactionService
    {
        public void CreateProduct(ProductModel product)
        {
            var productInsertQuery = string.Format("Insert into Products (ProductName,Price,CategoryId,TagId,Description,IsActive,createdtime) values ('{0}',{1},(Select Id from productcategories where category = '{2}'),(Select Id from producttags where Tag = '{3}'),'{4}',{5},current_timestamp());SELECT LAST_INSERT_ID();", product.ProductName, product.Price, product.Category, product.Tag, product.Description, product.IsActive);

            var lastInsertedProductId = 0;
            using (TransactionScope transactionScope = new TransactionScope())
            {
                using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
                using (MySqlCommand command = new MySqlCommand(productInsertQuery, conn))
                {
                    conn.Open();
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                lastInsertedProductId = reader.GetInt32(0);
                            }
                            reader.NextResult();
                        }
                    }

                    foreach (var item in ImageHelper.CreateImages(product.Images, lastInsertedProductId))
                    {
                        command.CommandText = string.Format("Insert into productimages (ImageName,ProductId) values ('{0}',{1});", item, lastInsertedProductId);

                        command.ExecuteNonQuery();
                    }
                }
                transactionScope.Complete();
            }
        }

        public void DeleteProduct(int id)
        {
            List<string> productImages = new List<string>();

            var productDeleteQuery = string.Format("Delete from products where id ={0};", id);

            var fetchProductImagesQuery = string.Format("Select ImageName from productimages where ProductId = {0};", id);

            using (TransactionScope transactionScope = new TransactionScope())
            {
                using (MySqlConnection conn = new MySqlConnection(WebApiConfig.ConnectionString))
                using (MySqlCommand command = new MySqlCommand(fetchProductImagesQuery, conn))
                {
                    conn.Open();
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                productImages.Add(reader.GetString(0));
                            }
                            reader.NextResult();
                        }
                    }

                    command.CommandText = productDeleteQuery;
                    command.ExecuteNonQuery();

                    

                }
                ImageHelper.DeleteImages(productImages);
                transactionScope.Complete();
            }
        }
    }
}