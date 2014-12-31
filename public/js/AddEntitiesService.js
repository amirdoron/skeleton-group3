angular.module('app').factory('AddEntityService', function($http) {
    return {
        addEntity: function(PartyName) {
            $http.post('/party/',
                {name:PartyName}).then(
                function(response)
                {
                    console.log('got response',response.data);
                }
            );
        }
    };
});
