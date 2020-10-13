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
OrderNumber nvarchar(50) not null Unique,
TrackingNumber nvarchar(50)  null,
CourierId int  null,
createdtime datetime not null,
primary key(Id),
FOREIGN KEY (CourierId) REFERENCES Couriers(Id)
);


---------2.0 release

create table ProductCategories (
Id int not null auto_increment,
Category nvarchar(100) not null,
Label nvarchar(100) not  null,
primary key(Id)
);

create table ProductTags (
Id int not null auto_increment,
Tag nvarchar(100) not null,
primary key(Id)
);

create table products (
Id int not null auto_increment,
ProductName nvarchar(50) not null,
Price decimal  not null,
CategoryId int  not null,
TagId int  not null,
Description nvarchar(500) not null,
IsActive bit not null,
createdtime datetime not null,
primary key(Id),
FOREIGN KEY (CategoryId) REFERENCES ProductCategories(Id),
FOREIGN KEY (TagId) REFERENCES ProductTags(Id)
);

Create table ProductImages(
Id int not null auto_increment,
ImageName nvarchar(500) not null,
ProductId int  not null,
primary key(Id),
FOREIGN KEY (ProductId) REFERENCES products(Id)
);

Create table users(
Id int not null auto_increment,
Name nvarchar(100) not null,
MobileNumber nvarchar(100)   not null,
Password nvarchar(200)   not null,
IsAdmin bit not null,
createdtime datetime not null,
primary key(Id)
);

