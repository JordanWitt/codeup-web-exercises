(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^
            return Math.PI(Math.pow(this.radius, 2)); // TODO: return the proper value

        },
        logInfo: function (doRounding) {
            if (this.radius) {
                return Math.round(this.radius);
            } else {
                return this.radius;
            }
        }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
//updating
