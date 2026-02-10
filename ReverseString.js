let str="Hello World JavaScript"
let str2=str.toLowerCase()

let rev=""

for(let i=str2.length-1;i>=0;i--){
    rev+=str2[i]
    
}

if(str2==rev){
     console.log("Its a Palindrome");
     
}else{
    console.log("Its not a Palindrome");
    
}



console.log(rev)