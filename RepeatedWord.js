let str=["main","noon","sun","moon","light"]
let str2=["nain","loon","sun","moon","night"]
let main=[]

for(let i=0;i<str.length;i++){
    for(let j=0;j<str2.length;j++){
        if(str[i]===str2[i]){
           main.push(str[i]) 
           break;
        }
    }
}

console.log(main)