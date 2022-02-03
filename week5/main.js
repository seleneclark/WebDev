/*jslint devel: true */
// (function () {
    'use strict';

    function doGood() {
        var message = "doing good!";
        console.log(message);
        var message2 = 'or am i?';
        console.log(message2);

        console.log("doing something");

        var toDoList = ["List",'things',"to do"];
        console.log(toDoList);

    }

    function amIOldEnough(age){
        debugger;
            if (age < 12) {
            debugger;
            return 'No, sorry.';
            } else if (age < 18) {
            debugger;
            return 'Only if you are accompanied by an adult.';
            } else {
            debugger;
            return 'Yep, come on in!';
        }
    }
    // doGood();
    // amIOldEnough(16);
// }());

//'use strict';
//unicorn();
//
//function three(){ unicorn(); }
//function two(){ three(); }
//function one(){ two(); }
//one();

