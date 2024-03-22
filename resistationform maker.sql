create table form (name varchar(50),email varchar(30),phone_no bigint check(phone_no between 1000000000 and 9999999999),
course varchar(50),gender varchar(10),dob date,address varchar(50),city varchar(30),state varchar(25),pincode int check(pincode between 100000 and 999999))

select*from form