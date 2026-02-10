let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let merged=[]

for(let i=0;i<arr1.length;i++){
    merged[i]=arr1[i]


for(let i=0;i<arr2.length;i++){
    let found=false;
    for(j=0;j<merged.length;j++){
        if(arr2[i]===merged[j]){
            found=true
        }
    }
    
    if(!found){
        merged[merged.length]=arr2[i] //or merged.push(arr2[i])
    }
}
}

console.log(merged)