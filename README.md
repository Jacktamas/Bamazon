# Bamazon
A command line application that helps customers order products from **Bamazon** and deplete stock from the store's inventory and provide access to managers to *view products for sale*, *view low inventory*, *add to inventory*, *add new products*.

## Installation
* Download the project and CD to project folder and run ```npm install```
* Then run ```node bamazon.js``` 

## Customers View
Customers have to choose customer user to order through **Bamazon**
<img src="images/customer1.png" width="500px">

Then **Bamazon** will display all the products are available for sale, welcome customers, display the date and time at the moment of logging and start their order by asking first what's the *item id* that they would like to purchase.
<img src="images/customer2.png" width="500px">


Then customers have to enter how many they would like to purchase
<img src="images/customer4.png" width="500px">


If **Bamazon** does not have enough products

<img src="images/customer5.png" width="500px">

**Bamazon** will let customers know that the store does not have the quantity they asked for and let them know how many products are left in stock

<img src="images/customer6.png" width="500px">

If **Bamazon** have the quantity customers asks for will provide them with total of their purchase and ask how they would like to pay

<img src="images/customer7.png" width="500px">

After choosing payment method **Bamazon** will process the payment and thank customers for shopping at **Bamazon**.

<img src="images/customer8.png" width="500px">

## Managers View

When managers choose manager user to load the managers dashboard they have to enter their user name and password

<img src="images/manager1.png" width="500px">

If the user name or password or both does not match the manager login **Bamazon** will let the users know they entered the wrong credentials

<img src="images/manager2.png" width="500px">

If the user name and password match the manager login **Bamazon** will display to the user the Managers Dashboard and welcome them and show them date and time at the moment of loggin in and display the Managers Menu options *view products for sale*, *view low inventory*, *add to inventory*, *add new products*. Whatever they choose **Bamazon** will send them back to the menu option after they are done with task they do until they choose **_Exit_** which is will exit the app

<img src="images/manager3.png" width="500px">

If they choose to *view products for sale* **Bamazon** will list all the products are available for sale

<img src="images/manager4.png" width="500px">

If they choose to *view low inventory*

<img src="images/manager5.png" width="500px">

**Bamazon** will list all items with an inventory count lower than five

<img src="images/manager6.png" width="500px">

If they choose to *add to inventory*

<img src="images/manager7.png" width="500px">

**Bamazon** will ask users two questions, what is the *item id* and *quantity* to be added as shown in the pictures below an example of a product before adding and after adding

<img src="images/manager8.png" width="500px">

<img src="images/manager9.png" width="500px">

Here you can see the updated item with difference in the *stock quantity* between the two and let the user that their add has been successfully processed

<img src="images/manager10.png" width="500px">

If they choose to *add new products* **Bamazon** will gather information about the product they need to add as shown in the pictures below, *product name*, *department name*, *price*, *quantity*

<img src="images/manager11.png" width="500px">

<img src="images/manager12.png" width="500px">

<img src="images/manager13.png" width="500px">

<img src="images/manager14.png" width="500px">

<img src="images/manager15.png" width="500px">

After getting all the information **Bamazon** will let the users know when their add is successfully processed.

<img src="images/manager16.png" width="500px">

Finally if users are done with all the tasks they need to be done they can choose **_Exit_** to exit the app.

<img src="images/manager17.png" width="500px">
