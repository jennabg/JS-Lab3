    //LAB 3 - UNIT TESTING
    //======== THIS FILE IS FOR THE UNIT TEST ==========

    // Take 2 parameters
    // - A value to pass to the checkHumbrId function
    //  and the expected result of running that value with the function
    // - Output results of the test to the html
    window.onload = pageLoaded;

    function pageLoaded() {
       

        function test_checkHumbrId(valueIn, expected) {
            "use strict";
            var outputResult="";

            let result = checkHumbrId(valueIn);
            let msg = "Value tested: " + valueIn + " Expected result: " + expected + " ";
            if(result === expected){
                outputResult += msg + "<span style='color: green;' >==PASSED==</span><br>";
            }
            else{
                outputResult += msg + "<span style='color: red;'>xxFAILEDxx</span> <br>";
            }

            let msgBox = document.getElementById("data");
            // let msgColor = document.getElementById("green");

            // if (outputResult = "==PASSED==") {
            //     msgColor.style.color = "#7CFC00";
            // }
            // else{
            //     msgColor.style.color = "#FF0000";
            // }

            msgBox.innerHTML += outputResult;
            // msgColor.innerHTML += msgResult;
        }
        test_checkHumbrId("n01289618", true);
        test_checkHumbrId(845983984, false);

        test_checkHumbrId("n01289618", false);
        test_checkHumbrId("abcdefgh", false);

        test_checkHumbrId("n0123456789", false);
        test_checkHumbrId("n01289", false);

        test_checkHumbrId("N01289618", true);

    }