function moveZero(arr){
    let result=[]
    let zerocount=0
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            result.push(arr[i])
        }else{
            zerocount++
        }
    }
     
    for(let i=0;i<zerocount;i++){
        result.push(0)
    }
    
    return result
 
}

console.log(moveZero([0,1,2,0,3,4,5]))
