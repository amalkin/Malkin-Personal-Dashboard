weUniC.factory('Mentors', function($http) {
   
    var mentors = [];
    function returnAllMentors(callback){
      $http.get("json-data/mentors.json").success(
        function(data) {
          mentors = data;
          callback(data);
        }); 
    }
    return {
      all: returnAllMentors,
      get: function(mentorId) {
        return mentors[mentorId];
      }
    }

});