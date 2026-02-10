let str = "india is my country";

let first="";

for(let i=0;i<9;i++){
    first+=str[i]
}

let second="";

for(let i=9;i<str.length;i++){
    second+=str[i]
}

let newStr =first + "hi" + second;

console.log(newStr)

//2nd Method 

// let str = "india is my country";

// let centerPos = Math.floor(str.length/2);

// str = str.slice(0,centerPos) + "hi" + str.slice(centerPos+2)

// console.log(str)

