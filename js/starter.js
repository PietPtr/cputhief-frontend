var workers = [];
var CPU_CORES = 2; //navigator.hardwareConcurrency;

for (i = 0; i < CPU_CORES; i++) {
    console.log("Spawned worker " + i);
    workers.push(new Worker("js/algorithm.js"))
}
