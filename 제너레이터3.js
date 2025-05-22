function* generateSequence(){
    yield 1;
    yield 2;
    yield 3;
}

let sequence = [0, ...generateSequence()];

console.log(sequence);
