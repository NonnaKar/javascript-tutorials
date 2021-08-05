// function diffArray(arr1, arr2) {
//     var newArr = [];
//     Methods
//     ONE
//     1. concat = [arr1 + arr2]
//          result = [1,2,3,5,1,2,3,4,5]
//    2. Take arr1 and iterate
//        for each element of arr1 count the no. of occurences in concat
//   3. If count=1, add that element from arr1 to newArr[]. else skip and countinue looping arr1
  
//   4. Repeat step 2 & 3 using arr2
  
  
//   TWO
//   1. for(let i=0; i< arr1.length; i++) {
//        i) for(let j=0; j<arr2.length; j++) {
//                arr1[i] compare with arr2[j]
//                if(they are equal)
//                    exit;
//                else(they are not equal)
//                  continue;
//        iii)    }
       
//   }
//   a = [1, 2, 3, 5]
//   b = [3, 2, 1, 4, 5]
//   tracing
//   (i).       condition.        code.                                                      aftercode
//   (0)        0 < 4 (true).        (j)  condition   code            aftercode(j++).         i = 1
//                                    0.  0 < 5(t).   1 compare 3      j = 1
//                                    1   1 < 5(t).   1 compare 2      j = 2
//                                    2   2 < 5(t).   1 compare 1----exit---- 
//   (1)        1 < 4 (true).        (j)  condition   code            aftercode(j++).         i = 2
//                                    0.  0 < 5(t).   2 compare 3      j = 1
//                                    1   1 < 5(t).   2 compare 2 --------exit-------
  
//   (2)        2 < 4 (true).        (j)  condition   code            aftercode(j++).         i = 2
//                                    0.  0 < 5(t).   3 compare 3 ------------exit---------------
  
//   (3)        3 < 4 (true).        (j)  condition   code            aftercode(j++).         i = 2
//                                    0.  0 < 5(t).   5 compare 3      j = 1
//                                    1   1 < 5(t).   5 compare 2      j = 2
//                                    2   2 < 5(t).   5 compare 1      j = 3
//                                    3   3 < 5(t).   5 compare 4      j = 4
//                                    4   4 < 5(t).   5 compare 5 -----exit------------
  
  
  
  
  
  
  
//                                    3   3 < 5(t).  arr2[3] = 4      j = 4
//                                    4   4 < 5(t).  arr2[4] = 5      j = 5
//                                    5   5 < 5(f)------exit----------
//   i = 2.           1 < 4(true).  i) arr1[1] = 2. (i = 2)
  
  
  
  
  
//   output: It will print
  
//   0 32145
//   1 32145
//   2 32145
//   3 32145
//   4 32145
//   tracing
//   i's value.      condition.      code.         aftercode (i++)
//   i = 0.           0 < 4(true).  i) arr1[0] = 1  (i = 1)
//   i = 1.           1 < 4(true).  i) arr1[1] = 2. (i = 2)
//   i = 2.           2 < 4(true).  i) arr1[2] = 3. (i = 3)
//   i = 3.           3 < 4(true).  i) arr1[3] = 5. (i = 4)
//   i = 4.           4 < 4(false). --------exit--------------
  
//   tracing
//   j's value.      condition.      code.         aftercode (j++)
//   j = 0.           0 < 5(true).   arr2[0] = 3  (j = 1)
//   j = 1            1 < 5(true).   arr2[1] = 2  (j = 2)
//   j = 2            2 < 5(true).   arr2[2] = 1  (j = 3)
//   j = 3            3 < 5(true).   arr2[3] = 4  (j = 4)
//   j = 4            4 < 5(true).   arr2[4] = 5  (j = 5)
//   j = 5            5 < 5(false) ----------exit----------------
  
//   }
  
  
//   diffArray(a, b);
  
  
//   //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// **********          Intermediate Algorithm Scripting: Wherefore art thou


// function whatIsInAName(collection, source) {
//     // What's in a name?
//     var arr = [];
//     // Only change code below this line
  
//   for (let i=0; i< collection.length; i++) {
//   const element_obj = collection[i]
//   for (let key in source)
//   }
  
//   source = { last: "Capulet" }
//   tracing
//   i.   condition.   code.                                            aftrercode
//   0      0<3      e_o = { first: "Romeo", last: "Montague" }  
  
  
  
//   new_obj = {a:1, b:2, c:3}
//   for (let j in new_obj) {
//   console.log(j)
//   }
//   a b c
//   algorithm - Idea
  
//   1. iterate over collection - element
//   2. element is an object{key1: value1, key2:value2}
//   3. source.key Object.keys(element){
//     if source.key matches with element.key? 
//        true-> source.value = element.value? -true
//   }
  
  
//     // Only change code above this line
//     return arr;
//   }
  
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  