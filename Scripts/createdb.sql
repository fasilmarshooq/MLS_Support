create database ManiLaxmiSilks;
use manilaxmisilks;

create table Couriers (
Id int not null auto_increment,
Courier nvarchar(50) not null,
CourierURL nvarchar(100)  null,
primary key(Id)
);

create table orders (
Id int not null auto_increment,
OrderNumber nvarchar(50) not null,
TrackingNumber nvarchar(50)  null,
CourierId int  null,
createdtime datetime not null,
primary key(Id),
FOREIGN KEY (CourierId) REFERENCES Couriers(Id)
);

Insert into Couriers (Courier,CourierUrl) values ('ST','https://demo.com');
Insert into Couriers (Courier,CourierUrl) values ('DTDC','https://demo.com');
Insert into Couriers (Courier,CourierUrl) values ('Professional','https://demo.com');

Insert into Orders (OrderNumber,TrackingNumber,CourierId,createdtime) values ('B67786','CBE8837373',1,current_timestamp());