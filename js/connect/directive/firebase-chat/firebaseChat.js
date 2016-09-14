weUniC.directive("firebaseChat", function(){
  return {
    restrict : "E",
    scope: {
      feed: "="
    },
    templateUrl : "js/connect/directive/firebasechat/template.html",
    link: function(scope, elem, attr){
      console.log("firebase-chat directive");
    }
  };
});
