weUniC.directive("checkList", function($timeout){
  return {
    restrict : "E",
    scope: {
      preview: "=?",
      updateChecklist: "&"
    },
    templateUrl : "js/common/directive/checklist/template.html",
    link: function(scope, elem, attr){

      var nextCheckpoint, elemHeight, checkboxTarget, dataParent, checkboxTargetParent, innerCheckboxCollection ,innerCheckboxCount, dataInner;

      var rootElem = $(elem[0].querySelector(".w3-checklist-container"));
      var heaaderBar = $(".bar-dark.bar.bar-header");
      var tabBar = $(".tab-nav.tabs");

      var checkboxes = rootElem.find('i');

      checkboxes.on("click, tap", function(event){

        checkboxTarget = $(event.target);

        if(checkboxTarget.hasClass("selected")){
          checkboxTarget.attr('class', '');
        }else{
          checkboxTarget.attr('class', 'selected');
        }

        checkboxTarget.parent().toggleClass("selected");

        dataParent = checkboxTarget.attr("data-parent");
        if(dataParent){

          checkboxTargetParent = rootElem.find("." + dataParent + ">i");

          innerCheckboxCount = 0;
          innerCheckboxCollection = rootElem.find("." + dataParent + " ul i");
          innerCheckboxCollection.each(function(i, item){
            if($(item).hasClass("selected")){
              innerCheckboxCount ++
            }
          });

          checkboxTargetParent.attr('class', '');
          checkboxTargetParent.parent().removeClass("selected");

          if(innerCheckboxCollection.length == innerCheckboxCount){
            checkboxTargetParent.attr('class', 'selected');
            checkboxTargetParent.parent().addClass("selected");
          }else if(innerCheckboxCount > 0){
            checkboxTargetParent.attr('class', 'partial');

          }
        } else {


          //check for inner checkpoints

          dataInner = checkboxTarget.attr("data-inner");
          checkboxTargetParent = rootElem.find("." + dataInner + ">i");
          if(dataInner){
            rootElem.find("." + dataInner + " ul i").each(function(i, item){

              if(checkboxTargetParent.hasClass("selected")){
                $(item).attr('class', 'selected');
              }else{
                $(item).removeAttr('class');
              }
            });
          }

        }

        updateCheckpoint();

        scope.$digest();
      });

      if(!scope.preview && scope.preview != true){
        scope.preview = false;
      }

      if(scope.preview){

        nextCheckpoint = rootElem.find("li:not(.selected)").first();
        nextCheckpoint.addClass("highlighted");

      }

      $timeout(function(){

        elemHeight = $(window).innerHeight() - rootElem.position().top - (heaaderBar.height() + tabBar.height() + 10);

        if(elemHeight < 156){
          elemHeight = 156;
        }

        elemHeight = Math.floor(elemHeight-2);
        elemHeight += "px";

        rootElem.css({"height": elemHeight});
      }, 1);


      function updateCheckpoint(){
        var outerCheckCount = 0;
        var outerCheckpointCollection = rootElem.find(">ul>li");
        outerCheckpointCollection.each(function(i, item){

          if($(item).hasClass("selected")){
            outerCheckCount++;
          }
        });


        scope.$emit("UPDATE_CHECKLIST", {percent: Math.round(outerCheckCount/outerCheckpointCollection.length *100) });
      }

    }
  };
});
