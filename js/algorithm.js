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

function post_results(result, block, time, n) {
    var post = new XMLHttpRequest();
    post.onreadystatechange = function() {
        if (post.readyState == XMLHttpRequest.DONE) {
            console.log(post.responseText);
        }
    }

    console.log(result);

    json = {};
    json["result"] = result;
    json["block"] = block;
    json["time"] = 0;
    json["n"] = n;

    console.log(json);

    post.open('POST', 'http://polyakov.student.utwente.nl:5000/api/post_results', true);
    post.send(JSON.stringify(json));
}

function get_assignment() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var assignment = JSON.parse(xhr.responseText);

            console.log(assignment);

            console.time("prime");

            var primes = []

            var block = assignment.block;
            for (i = block; i < block + assignment.n; i++) {
                if (isPrime(i)) {
                    primes.push(i);
                }

                counter = i - block
                if (counter % Math.floor(assignment.n / 100) == 0) {
                    postMessage((counter / assignment.n) * 100);
                }
            }

            console.timeEnd("prime");

            post_results(primes, assignment.block, assignment.n);

            get_assignment();
        }
    }
    xhr.open('GET', 'http://polyakov.student.utwente.nl:5000/api/get_number', true);
    xhr.send(null);
}

get_assignment();


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
