
function modArray(arr,callback) {
    var result ="";
    for(var i =0; i < arr.length; i++) {

        result = result + callback(arr,i);
    }

    return result;
}

function mult2(arr, increment) {
    return arr[increment] * 2 + "|"; 
}

function nameValue (arr,increment) {
    return "This array value is " + arr[increment] + " | "
}