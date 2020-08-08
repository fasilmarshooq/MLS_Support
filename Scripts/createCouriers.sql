INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'ST','http://www.erpstcourier.com/awb_tracking2.php'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'ST' );
	
INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'DTDC','https://www.dtdc.in/tracking/shipment-tracking.asp'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'DTDC' );	

INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'ICL','http://iclexpress.in/Login/GetTrackingDetails?TrackingNo=100002696671'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'ICL' );
	
INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'SKY KING','https://skyking.co/'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'SKY KING' );	

INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'SHREE ANJANI','http://www.shreeanjanicourier.com/'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'SHREE ANJANI' );
	
INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'TRACKON','http://trackoncourier.com/'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'TRACKON' );	

INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'INDIA POST','https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'INDIA POST' );
	
INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'FLY KING','https://demo.com'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'FLY KING' );	

INSERT INTO Couriers(Courier, CourierUrl) 
    SELECT 'GMS','http://www.gmsworldwide.com/tracking.php'
    FROM dual WHERE NOT EXISTS (SELECT * FROM Couriers WHERE Courier = 'GMS' );

	