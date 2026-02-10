let arr = [1, [2, [3, 4]], 5];
let result = []
const flattenArr = (ar)=>{
    for(let i=0;i<ar.length;i++){
        if(Array.isArray(ar[i])){
            flattenArr(ar[i])
        }else{
            result.push(ar[i])
        }
    }
    
}

flattenArr(arr)
console.log(result)