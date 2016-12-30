(function (){
'use strict';

angular.module('ControllerAsSyntaxApp',[])
.controller('ParentController2',ParentController2)
.controller('ChildController2',ChildController2);


function ParentController2() {
  var parent=this;
  parent.value=1;
}
ChildController2.$inject = ['$scope'];
function ChildController2($scope){
  var child=this;
  child.value=5;
  console.log("ChildController2 scope ;",$scope);
}

})();
