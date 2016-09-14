weUniC.directive("twitterFeed", function(){
  return {
    restrict : "E",
    scope: {
      tweet: "="
    },
    templateUrl : "js/connect/directive/twitter-feed/template.html",
    link: function(scope, elem, attr){
      console.log("twitter-feed directive");
    }
  };
});
