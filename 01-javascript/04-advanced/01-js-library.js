var _ = {
    map: function(arr, callback) {
      for(let i =0; i <arr.length; i++){
        arr[i]=callback(arr[i]);
      }
    },
    reduce: function(list,iteraterCallback,memo) { 
        let index = 0;
        if(memo === undefined){
            memo = list[0];
            index = 1;
        };
        for(index; index<list.length; index++){
            iteraterCallback(memo, list[index], index, list);
            memo= iteraterCallback(memo, list[index],index, list);
        }
        return memo; 
    },
    find: function(list, callback) {
      for(var i =0; i<list.length; i++){
        if (callback(list[i])){
          return list[i];
        }
      }   
      
    },
    filter: function(arr, callback) {
      var temArr=[]; 
      for(var i =0; i< arr.length; i++){
        if(callback(arr[i])){
          temArr.push(arr[i]);
        }
      }
      return temArr;
    },
    reject: function(arr, callback) { 
      var temArr=[];
      for(var i=0; i<arr.length; i++){
        if(!callback(arr[i])){
          temArr.push(arr[i]);
        }
      }
      return temArr;
    }
  }
 // you just created a library with 5 methods!
const arr=[1, 2, 3, 4, 5, 6];
const list=[2,3,5,7,8];
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
console.log(_.map(arr, function callback(arr) { return arr * 5; }));
console.log(arr);
console.log(list);
console.log(_.reduce(list, function callback(list, memo) { return list + memo; }));

console.log(_.find(list, function callback(list) { return list === 5; }));