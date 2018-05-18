
var arr = [];
var consecArr = [];
var increArr = [];
var length = 1000;

// function for generating random 4 digit pin
// @method generateRandomPins
function generateRandomPins() {
   arr=[];
   length = 1000;
    for (var j = 0; j < length; j++) {
        let pin = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        let countIncre = testIncremental(pin);
        if (countIncre) {
            for (var i = 0; i < 4; i++) {
                if (i != 2 && parseInt(pin.charAt(i)) + 1 == parseInt(pin.charAt(i + 1)) && parseInt(pin.charAt(i + 1)) + 1 == parseInt(pin.charAt(i + 2))) {
                    let sampleData = parseInt(pin.charAt(i)) + 2
                    pin = pin.replaceAt(i, sampleData.toString());
                }
            }
        }
        let count = testConsecutive(pin);
        if (count < 4) {
            pin = changeConsecutiveText(pin);
        }
        arr.length==0? arr.push(pin):"";
        if(arr.indexOf(pin) == -1 )
        {
          if(testIncremental(pin)==false)
          {
            arr.push(pin)
          }else{
            length = length + 1;
          }
        }else if (arr.length != 1) {
             length = length + 1;
          }
    }

//test case for final testing of random array

    finalRandomArrayTest(arr);
    document.getElementById("random").innerHTML = arr.toString();
   
}

// function for checking any same consecutive number exists
// @method testConsecutive
// @variable x:4-digit number

function testConsecutive(x) {
    var count = 0;
    for (var i = 0; i < 4; i++) {
        if (x.charAt(i) != x.charAt(i + 1)) {
            count++
        }
    }
    return count;
}


// function for changing the consecutive number
// @method changeConsecutiveText
// @variable x:4-digit number
function changeConsecutiveText(x) {
    for (var i = 0; i < 4; i++) {
        if (x.charAt(i) == x.charAt(i + 1)) {
            let d = i < 2 ? parseInt((x.charAt(i + i))) != 0 ? parseInt((x.charAt(i + i))) - 1 : parseInt((x.charAt(i + i))) + 1 : i != 3 ? parseInt((x.charAt(i + 1))) != 0 ? parseInt((x.charAt(i + 1))) - 1 : parseInt((x.charAt(i + 1))) + 1 : ""
            x = i < 2 ? x.replaceAt(i + i, d.toString()) : i != 3 ? x.replaceAt(i + 1, d.toString()) : "";
        }
    }
    return x;
}


// function for whether incremental chain exists
// @method testIncremental
// @variable x:4-digit number
function testIncremental(x) {
    var count = 0;
    for (var i = 0; i < 4; i++) {
        if (i != 2 && parseInt(x.charAt(i)) + 1 == parseInt(x.charAt(i + 1)) && parseInt(x.charAt(i + 1)) + 1 == parseInt(x.charAt(i + 2))) {
            return true;
            break;
        }

    }
    return false
}


// unit test function to check whether the final array has any consecutive numbers or incremental ones
// @method finalRandomArrayTest
// @variable arr:final array
function finalRandomArrayTest(arr)
{
    console.log("ArrayLength",arr.length)
    consecArr = [];
    increArr = [];
    for (var k = 0; k < arr.length; k++) {
        let characterCount = testConsecutive(arr[k]);
        if (characterCount < 4) {
            consecArr.push(counts);
        }
        let countse = testIncremental(arr[k]);
        if (countse) {
            increArr.push(countse);
        }
    }
    document.getElementById("consecutive").innerHTML = consecArr.toString();
    document.getElementById("increment").innerHTML = increArr.toString();

}


// string replace funtion
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
