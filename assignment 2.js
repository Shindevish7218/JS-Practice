// /*Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1
// */
//  function findPositions(arr,element){
//     var position = [] 
//     for(var i=0; i <= arr.length -1; i++){
//         if(arr[i] == element){
//             position.push(i);
//         }
//     }

//     if(position.length == 1){
//         return position[0]
//     }
//     else if(position.length > 1){
//         return position
//     }else{
//         return-1
//     }
//  }

//  var positionOfElement = findPositions([1,2,3,4,5,1,3],3);
//  console.log(positionOfElement);

//  /*
// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
// */
for (var i=1; i<=5 ;i++){
    var numbers = ""
    for(var j=5; j >= i; j--){
        numbers += j
    }
    console.log(numbers);
}
// /*
// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]
// */
// var  arr = [3,2,1,4,5,45]
// function customSort(val1,val2){
//     if( val1 > val2){
//         return 1
//     }else{
//         return -1
//     }
// }
// console.log(arr.sort(customSort))
// /*
// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
// */
// var str1 = "HELLO"
// var str2 = "JELLO"

// if(str1.split("").sort().join("") == str2.split("").sort().join("")){
//     console.log("Anagram")

// }else{
//     console.log("Not Anagram")
// }
// /*
// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
// */
// var str = "Hello"
// var reversedstr =""
// for(var i= str.length -1; i >= 0; i--){
//     reversedstr += str[i]
// }
// console.log(reversedstr)