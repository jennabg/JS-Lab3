    //LAB 3 - UNIT TESTING
    //======== THIS FILE IS FOR THE UNIT TEST ==========

    // Take 2 parameters
    // - A value to pass to the checkHumbrId function
    //  and the expected result of running that value with the function
    // - Output results of the test to the html
    window.onload = pageLoaded;

    function pageLoaded() {
        var outputResult;

        function test_checkHumbrId(valueIn, expected) {
            "use strict";

            let result = checkHumbrId(valueIn);

            if(result === expected){
                outputResult = "==PASSED==";
            }
            else{
                outputResult = "xxFAILEDxx";
            }

            let msg = "Value tested: " + valueIn + " Expected result: " + expected + " " + outputResult + "<br/>";

            let msgBox = document.getElementById("data");
            msgBox.innerHTML += msg;
        }
        test_checkHumbrId("n01289618", true);
        test_checkHumbrId(845983984, false);

        test_checkHumbrId("n01289618", false);
        test_checkHumbrId("abcdefgh", false);

        test_checkHumbrId("n0123456789", false);
        test_checkHumbrId("n01289", false);

        test_checkHumbrId("N01289618", true);

    }