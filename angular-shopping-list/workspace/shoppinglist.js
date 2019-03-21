//Leonard Carcaramo 03/21/19 Utilized code from W3Schools https://www.w3schools.com/angular/angular_application.asp

var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) 
{
    //shopping list
    $scope.list =   [
                        {item: "Milk", quantity: 2, price: 2.50},
                        {item: "Bread", quantity: 3, price: 3.00},
                        {item: "Cheese", quantity: 1, price: 4.25}
                    ];
    
    //add new item
    $scope.addItem = function () 
    {
        $scope.inputErrorText = "";
        
        if (!$scope.item || !$scope.quantity || !$scope.price) 
        { 
            $scope.inputErrorText = "A Quantity, Price, and Item Name must be provided in order to add an item to the shopping list.\n" +
            "Price must only contain two decimal places.";
            return; 
        }
        else if (checkDuplicate() == false) 
        {
            $scope.list.push({item: $scope.item, quantity: $scope.quantity, price: $scope.price});
        } 
        
        else 
        {
            $scope.inputErrorText = "The item is already in your shopping list.";
        }
    }
    
    //check for duplicate items in the shopping list
    function checkDuplicate()
    {
        var found = false;
        for (var i = 0; i < $scope.list.length; i++)
        {
            if ($scope.list[i].item == $scope.item)
            {
                found = true;
            }
        }
        return found;
    }
    
    //remove a specified item from the shopping list
    $scope.removeItem = function (x) 
    {    
        $scope.list.splice(x, 1);
    }
    
    //calculate the total price of everything in the shopping list.
    $scope.calcTotal = function ()
    {
        var total = 0;
        for (var i = 0; i < $scope.list.length; i++)
        {
            total += $scope.list[i].price*$scope.list[i].quantity;
        }
        total = total.toFixed(2);
        if (isNaN(total)) 
        { 
            $scope.editErrorText = "One of the prices in the shopping list is invalid. Valid prices only have two decimal places.";
            return "Cannot calculate price.";
        }
        else 
        { 
            $scope.editErrorText = "";
            return "Total: $" + total; 
        }
    }
});
