//Loop In Loop:
//Double Loop:
// a)
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`)
    }
}

// b)
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log(`i=${i}, j=${j}`, "-> b) loop example")
    }
}

// c) Reverse inner Loop Example 
for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        console.log(`i=${i}, j=${j}`, "-> c) loop example")
    }
}

//d) Reverse inner Loop Example with greater than and equal to :

for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        console.log(`i=${i}, j=${j}`, "-> d) loop example")
    }
}

//e) Reverse outer Loop: 
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(`i=${i}, j=${j}`, "-> e) loop example")
    }
}