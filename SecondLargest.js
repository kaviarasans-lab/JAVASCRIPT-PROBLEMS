

let arr=[10,10,10]

let largest=arr[0]
let SecondLargest=-Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        SecondLargest=largest
        largest=arr[i]
    }
}

console.log(SecondLargest)

