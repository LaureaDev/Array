const array = [2, 1, 3, 7, 100, 98, 54, 37, 17, 10, 23 ];

for( let i = 0; i < array.length; i++){
    for( let x = i +1 ; x < array.length; x++){
        if (array[i] > array[x]){
            let temp = array [i];

            array[i] = array[x];
            array[x] = temp;
        }
    }
}
console.log(array);

let array2 = [ ... array];

array2.sort( (i, x) => {
    if (i < x){
        return - 1;
    }
    if( i > x){
        return 1;
    }
    return 0;
})

console.log(array2);

