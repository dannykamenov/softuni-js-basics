function solve(input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumbers = '';
    for (let i = n; i < m; i++){
        if(i % 9 === 0){
            sum += i
            console.log(i);
        }
    }
    console.log(`${sum}`);
}

solve(["100","200"])