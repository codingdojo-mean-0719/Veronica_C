function bubbleSort(Arr){
    var len = Arr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < len; i++) {
            if (Arr[i] > Arr[i + 1]) {
                let temp = Arr[i];
                Arr[i] = Arr[i + 1];
                Arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return Arr;
}
console.log(bubbleSort([5,3,1,6,7,2,4]))