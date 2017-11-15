function isPrime(n) {
    if (n <= 1) {
        return false;
    } else if (n <= 3) {
        return true;
    } else if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    var i = 5;
    while (i * i <= n) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false
        }
        i = i + 6;
    }
    return true;
}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        // console.log(JSON.parse(xhr.responseText));
    }
}
xhr.open('GET', 'http://polyakov.student.utwente.nl:5000/api/get_number', true);
xhr.send(null);

console.time("prime");

var num = 298374949981889;
for (i = num; i < num + 1000; i++) {
    if (isPrime(i)) {
        // console.log(i);
    }
}

console.timeEnd("prime");

// $.get('http://polyakov.student.utwente.nl:5000/api/get_number', {
// }, function(serverResponse){
//
//     console.log(serverResponse);
//
//     // console.time("primetest");
//     //
//     // var num = 298374982374989;
//     // for (i = num; i < num + 1000; i++) {
//     //     if (isPrime(i)) {
//     //         console.log(i);
//     //     }
//     // }
//     //
//     // console.timeEnd("primetest");
//
//     // var code = "while(true){}";
//     // var URL = window.webkitURL || window.URL;
//     // var bb = new Blob([code], {type : 'text/javascript'});
//     //
//     // code = URL.createObjectURL(bb);
//     //
//     // for (i = 0; i < navigator.hardwareConcurrency; i++) {
//     //     // new Worker(code);
//     // }
//
// })
