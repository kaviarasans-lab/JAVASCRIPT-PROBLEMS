let arr = [1,5,4, 2, 2,3,4, 3, 4, 4, 5];

let uniqueArr=[]

arr.sort((a,b)=>a-b)

for(let i=0;i<arr.length;i++){
     let isDuplicate=false;
     
     for(let j=0;j<uniqueArr.length;j++){
         if(arr[i]===uniqueArr[j]){
               isDuplicate=true;
              break;
         }
         
         
         }
         
         if(!isDuplicate){
             uniqueArr.push(arr[i])
     }
}


console.log(uniqueArr)