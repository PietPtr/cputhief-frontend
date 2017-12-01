var workers = [];
var CPU_CORES = navigator.hardwareConcurrency;

for (var i = 0; i < CPU_CORES; i++) {
    console.log("Spawned worker " + i);
    workers.push(new Worker("js/algorithm.js"))
}

// Generate progress "bars"
var div = document.getElementById("div").innerHTML
console.log(div)
for (var i = 0; i < workers.length; i++) {
    div = div + "<p id=\"Worker" + i + "\">Worker " + i + ": </p>\n"
}
console.log(div)

document.getElementById("div").innerHTML = div

var handleMessage = function(index, event) {
    // document.getElementById("Worker" + this.index).innerHTML = "Worker " + index + ":" + e.data
    console.log("index: ", index)
    console.log("event: ", event.data)

    document.getElementById("Worker" + index).innerHTML = "Worker " + index +
        ": " + "|".repeat(parseInt(event.data))
};

// Set communication function
for (var j = 0; j < workers.length; j++) {
    // workers[j].onmessage = function(e) {
    //     let index = j;
    //     console.log('Message: ' + e.data + " " + index)
    //
    // }

    workers[j].onmessage = handleMessage.bind(this, j);
}
