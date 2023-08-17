// truthy 

// falsy values



if(' '){
    console.log("truthy")
}

//false , 0 , BigInt; 0n, " ",  -0, NaN , null , undefined

//nullish coelishing operator (??): null , undefined

let a;

a = undefined ?? null ?? 20;
console.log(a)

// ternary operator

const proPrice = 50

proPrice>=40 ? console.log("yes"):console.log("No")