// largest Number find

function findLargestNumber(arr){
    let maxi = arr[0];
    for(let i = 0;i< arr.length;i++){
        if(maxi < arr[i]){
            maxi = arr[i]
        }
    }
    return maxi
}
 
let arr = [23,32,32,32,4,435,5,6,6,767]
console.log(findLargestNumber(arr))