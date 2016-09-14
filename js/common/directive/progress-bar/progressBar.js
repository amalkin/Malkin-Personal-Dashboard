weUniC.directive("progressBar", function(){
  return {
    restrict : "E",
    scope: {
      min: "@",
      max: "@",
      title: "@",
      phase: "@",
      percentage: "@",
      progress: "="

    },
    templateUrl : "js/common/directive/progress-bar/template.html",
    link: function(scope, elem, attr){

      scope.bPhase = false;
      scope.bPercentage = false;


      if(!scope.min){
        scope.min = 0;
      }

      if(!scope.percentage){
        scope.bPercentage = true;
      }else{
        scope.bPercentage = scope.percentage == "true"?true:false;
      }

      if(scope.phase){
        scope.bPhase = true;
      }

      if(!scope.max){
        scope.max = 100;
      }

      if(!scope.progress){
        scope.progress = 0;
      }

      scope.length = 0;

      var progressBarElem = $(elem[0].querySelector('.w3-progress-container'));
      var fillElem = $(elem[0].querySelector('.w3-progressbar'));
      var txtElem = $(elem[0].querySelector('.w3-txt-progress'));
      var txtElemPhase = $(elem[0].querySelector('.w3-txt-progress-phase'));

      calculateProgress();

      scope.$watch("progress", function(newVal, oldVal, scope){

        if(newVal != oldVal){
          scope.length = 0;

          calculateProgress();
        }

      });

      function calculateProgress(){

        var nFill = (progressBarElem.innerWidth()*scope.progress/100);
        var nFillPx= nFill + "px";

        var nLeft = nFill ;

        if(nLeft >0){
          nLeft -= (txtElem.innerWidth()/2);
          nLeft -= 10;
        }

        var nLeftPx = nLeft + "px";

        fillElem.css("width", nFillPx);
        txtElem.css("left", nLeftPx);
        txtElem.html(scope.progress + "%");

        if(scope.bPhase){
          txtElemPhase.html( scope.phase.replace( "%", (scope.progress + "%") ) )
        }
      }
    }
  };
});
