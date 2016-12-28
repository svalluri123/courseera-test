(function (){
'use strict';

var shoppingList1 = [
  "Milk","tea","sugar","chocolate","cookies","Pepto Bismol"
];

var shoppingList2 = [
  {
    name : "Milk",
    quantity : "2 Gallons"
  },
  {
    name : "tea",
    quantity : "3 packets"
  },
  {
    name : "sugar",
    quantity : "2 kgs"
  },
  {
    name : "chocolate",
    quantity : "2 packets"
  },
  {
    name : "cookies",
    quantity : "2 packets"
  },
  {
    name : "Pepto Bismol",
    quantity : "2"
  }
];


angular.module('ShoppingListApp',[])
.controller('ShoppingListController',ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1=shoppingList1;
  $scope.shoppingList2=shoppingList2;

  $scope.addToList = function (){
    var newItem = {
      name:$scope.newItemName,
      quantity:$scope.newItemQuantity
    };
    $scope.shoppingList2.push(newItem);
  };
}

})();
