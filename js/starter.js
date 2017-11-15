var workers = [];

for (i = 0; i < navigator.hardwareConcurrency; i++) {
    console.log("Spawned worker " + i);
    workers.push(new Worker("js/algorithm.js"))
}
