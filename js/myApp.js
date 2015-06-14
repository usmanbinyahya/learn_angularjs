/**
 * Created by usman on 6/14/15.
 */

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
    var ajax = $http.get("http://www.w3schools.com/angular/customers.php");

    ajax.success(function(response, status, headers, config) {
        that.names = response.records;
    });

    ajax.error(function(response, status, headers, config) {
        console.log(status);
    });
});

app.controller('validateCtrl', function() {
    this.user = 'John Doe';
    this.email = 'john.doe@gmail.com';
});