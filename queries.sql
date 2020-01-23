-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select P.ProductName, C.CategoryName
from Product as P
join Category as C
on P.CategoryId = C.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records
select Id, ShipName from [Order]
where OrderDate < '2012-08-09';


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select P.ProductName, OD.Quantity from OrderDetail as OD
join Product as P
on OD.ProductId = P.Id
order by OD.Id = '10251'
limit 3;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select O.Id as OrderId, C.CompanyName as CustomerCompany, E.LastName as EmployeeLastName from [order] as O
left join Customer as C
on O.CustomerId = C.Id
left join Employee as E
on O.EmployeeId = E.Id;