/**
 * Created by usman on 6/13/15.
 */


(function () {
    var app = angular.module('Learn01', []);
    app.controller('MainController', function () {

        var person = {
            firstName: "Scott",
            lastName: "Allen",
            imageSrc: "https://pbs.twimg.com/profile_images/2149314222/square.png"
        };

        this.message = "Usman";
        this.person = person;
    });

    app.controller('myCtrl', function() {
        this.firstName= "John";
        this.lastName= "Doe";

        this.names = [
            {name:'Jani',country:'Norway'},
            {name:'Hege',country:'Sweden'},
            {name:'Kai',country:'Denmark'}
        ];

        this.eventOnClick = function() {
          console.log("di klik");
        };
    });

    app.controller('customersCtrl', function($http) {
        var that = this;
        $http.get("http://www.w3schools.com/angular/customers.php").success(function(response) {
            that.names = response.records;
        });
    });
})();
