//Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

// function maxMinAvg(arr){
//     var max=arr[0];
//     var min=arr[0];
//     var sum=0;

//     for(var i=1; i<arr.length; i++){
//         if (arr[i]>max)
//             {
//                 max=arr[i];
//             }
//         if (arr[i]<min)
//         {
//             min=arr[i];
//         }
//         sum=sum+arr[i];
//         min = min;
//         max = max;
//     }
//     var avg=sum / arr.length;
//     var newarr=[min, max, avg];
    
//     return newarr;
    

// }
// console.log(maxMinAvg([1, -2, 9, 4]))

//console.log(maxMinAvg("The min is:" + min + "the max is," +max + "the avg is"+ avg))

function mini(arr) {
    var mini = 0;
  
    for (var i = 0; i < arr.length; i++) {
      var current = arr[i];
      if (current < mini) {
        mini = current;
      }
    }
  
    return mini;
}
  
function maxi(arr) {
    var maxi = 0;

    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        if (current > maxi) {
        maxi = current;
        }
    }
  
    return maxi;
}
  
function sum(arr) {
    var total = 0;
  
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
  
    return total;
}
  
function aveg(arr) {
    //var avg=sum / arr.length;
    return sum(arr) / arr.length;
}
  
  
function maxMinAvge(arr) {
    var max = maxi(arr);
    var min = mini(arr);
    var avg = aveg(arr);
    return 'The minimum is ' + min + ', the maximum is ' + max + ', and the average is ' + avg + '.';
}
  
console.log(maxMinAvge([1, -2, 9, 4]));

