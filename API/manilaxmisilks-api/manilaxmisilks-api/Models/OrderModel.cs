namespace devtools_api.Models
{
    public class OrderModel
    {
        public int Id { get; set; }
        public string OrderNumber { get; set; }
        public string TrackingNumber { get; set; }
        public string Courier { get; set; }
        public string CourierUrl { get; set; }
    }
}