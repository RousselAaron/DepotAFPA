Ex1 partie 2:

SELECT CompanyName AS `Société`,ContactName AS `contact`,ContactTitle AS `Fonction`,Phone AS `Téléphone`
FROM suppliers
WHERE country LIKE 'France'

Ex2 :

SELECT ProductName AS `Produit`,UnitPrice AS `Prix`
FROM products
INNER JOIN suppliers ON products.SupplierID = suppliers.SupplierID
WHERE companyName LIKE 'Exotic Liquids'

Ex3 :

SELECT companyName AS `fournisseur`,COUNT(productName) AS `Nbre produits`
FROM suppliers
INNER JOIN products as pro ON suppliers.SupplierID = pro.SupplierID
WHERE suppliers.country LIKE 'fr%'
GROUP BY companyName
ORDER BY `Nbre produits` desc

Ex4 :

SELECT orders.ShipName AS `Client`,COUNT(orders.OrderID) AS `Nbre commandes`
FROM orders
WHERE shipcountry LIKE 'fr%'
GROUP BY shipName
HAVING `Nbre commandes`>10

Ex5 :

SELECT orders.shipname AS `client`, SUM(`order details`.UnitPrice * `order details`.Quantity) AS `CA`, shipcountry AS `Pays`
FROM orders
INNER JOIN `order details` ON orders.OrderID = `order details`.OrderID
GROUP BY orders.ShipName, orders.ShipCountry
HAVING `CA`>30000 
ORDER BY `CA` DESC

Ex6 :

SELECT shipcountry AS `Pays`
FROM orders
INNER JOIN `order details` ON orders.OrderID = `order details`.OrderID
INNER JOIN products ON `order details`.ProductID = products.ProductID
INNER JOIN suppliers ON products.SupplierID = suppliers.SupplierID
WHERE companyName = 'Exotic Liquids'
GROUP BY shipcountry 
ORDER BY shipcountry

Ex7 :

SELECT sum(UnitPrice*Quantity) AS "Montant Ventes 97"
FROM orders 
JOIN `order details` 
    ON orders.OrderID = `order details`.OrderID
WHERE YEAR(orderdate) = "1997"

Ex8 :

SELECT MONTH(OrderDate) AS `Mois 97`,sum(UnitPrice*Quantity) AS "Montant Ventes 97"
FROM orders 
JOIN `order details` 
    ON orders.OrderID = `order details`.OrderID
WHERE YEAR(OrderDate) = '1997'
GROUP BY `Mois 97`

Ex9 :

SELECT orderdate AS `date de derni�re commande`
FROM customers
INNER JOIN orders ON customers.CustomerID = orders.CustomerID
WHERE companyName = 'Du monde entier'
ORDER BY orderdate DESC LIMIT 1;

Ex10 :

SELECT ROUND(AVG(DATEDIFF(shippeddate,orderdate))) AS `délai moyen de livraison en jours`
FROM orders


