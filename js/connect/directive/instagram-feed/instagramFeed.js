weUniC.directive("instagramFeed", function(){
  return {
    restrict : "E",
    scope: {
      feed: "="
    },
    templateUrl : "js/connect/directive/instagram-feed/template.html",
    link: function(scope, elem, attr){
      console.log("instagram-feed directive");
    }
  };
});
