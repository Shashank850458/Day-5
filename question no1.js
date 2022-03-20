//1. Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array.

//anonymous function:-
var arr = [1, 2, 3, 4, 5];
var odd = function(a)
{
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            console.log(a[i]);
        }
    }
}
odd(arr);


// IFFE:-
(function(odd){
    odd.forEach(element => {
        if(element%2!==0)
            console.log(element);
    }); 
})([1,2,3,4,5]);
/*output=> 
1
3
5
*/


//b. Convert all the strings to title caps in a string array

//anonymous function
(function()
{
  const strings =["what","is","this"];
  var value=[];
  for(var i=0;i<strings.length;i++)
  {
    var tempsrting=strings[i];
   // split
    tempsrting= tempsrting.toLowerCase().split(' ');

    for(var j=0;j<tempsrting.length;j++)
    {
      tempsrting[j]= tempsrting[j].charAt(0).toUpperCase()+tempsrting[j].slice(1);
    }
    value[i]=tempsrting.join(" ");
  }
  console.log(value);
})();
// output=> [ "What", "Is", "This" ]

// IFFE
(function(s){
    let arr = s.split(' ');
    let arr2 = arr.map(a => a.charAt(0).toUpperCase()+a.substring(1));
    s = arr2.join(' ');
    console.log(s);
})("what is this");
//output=> What Is This


//c. Sum of all numbers in an array.

//anonymous function
var nums=[1,2,3,4,5];
var b=function(nums)
{
    let sum=0;
    for(var i=0;i<nums.length;i++)
    {
        sum+=nums[i]
    }
    return sum;
}
console.log(b(nums));


// IFFE
(function(nums){
    let sum = nums.reduce((total,next) => { return total + next},0);
    console.log(sum);
})([1,2,3,4,5]); 
//output=> 15


//d. Return all the prime numbers in an array.

//anonymous
const arrnum = [1, 2, 3, 4, 5];
  let isPrime=function (num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  console.log(arrnum.filter(isPrime));
  

  // IFFE
  var prime = (function (arr) {
    array = arr.filter((number) => {
      if (number == 1) {
        return false;
      } else if (number == 2) {
        return true;
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
      }
      return true;
    });
    return array;
  })([1, 2, 3, 4, 5]);
  console.log(prime);

//output=> [ 2, 3, 5 ]


//e. Return all the palindromes in an array

//anonymous function
const palidrom =["madam","level",12345,"radar"];
var validate=function(palidrom) 
{
  var stringvalue = palidrom.toString();
  let lenstring=stringvalue.length;
  for(var i = 0;i<lenstring/2;i++)
  {
      if(stringvalue.charAt(i)!=stringvalue.charAt(lenstring-i-1))
      {
        return false;
      }   
  }
  return true;
}
console.log(palidrom.filter(validate));


// IFFE
let palindrome = (function (arr) {
  let array = arr.filter((string) => {
    let s = string.toLowerCase();
    let count;
    if (s.length % 2 == 0) {
      count = s.length / 2;
    }
    if (s.length == 1) {
      return true;
    } else {
      count = (s.length - 1) / 2;
    }
    for (let i = 0; i < count; i++) {
      if (s[i] != s[s.length - i - 1]) {
        return false;
      }
    }
    return true;
  });
  return array;
})(["Madam", "Level", " 12345", "Radar"]);
console.log(palindrome);
 
 //output=> [ 'Madam', 'level', 'Radar' ]


//f. Return median of two sorted arrays of the same size.

//anonymous function
var arr = [1,2,3,4,5]
var arr1 = [6,7,8,9,10];
var median;
var result = arr.concat(arr1)
var n = result.length;
if(n%2===0)
{
median = (( result[n/2]) + result[n/2+1] )/2;
}
else
{
median = (result[n/2])/2;
}
console.log(median); 


// IFFE
(function(arr,arr1)
{
var median;
var result=arr.concat(arr1)
var n=result.length;
if(n%2===0)
{
median=((result[n/2])+result[n/2+1])/2;
}
else
{
median=(result[n/2])/2;
}
console.log(median);
})([1,2,3,4,5],[6,7,8,9,10]);

//output=> 6.5 



//g. Remove duplicates from an array.

//anonymous function
arr=[1,2,3,4,5,6,7,1,3,5]
const res=function(arr){
    let obj = {};
    let a = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj)
            continue;
        else{
            obj[arr[i]] = i;
            a.push(arr[i]);
        }
    }
    console.log(a);
};
res(arr); //filter out duplicates from the array
//output=> [1,2,3,4,5,6,7]

// IFFE
(function(arr){
    let obj = {};
    let a = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj)
            continue;
        else{
            obj[arr[i]] = i;
            a.push(arr[i]);
        }
    }
    console.log(a);
})([1,2,3,4,5,6,7,1,3,5]);

//output=> [1,2,3,4,5,6,7]


//h. Rotate an array by k times

//anonymous function
var arr=[1,2,3,4,5];
var rotate=function(arr, k)
{
for(let i=1;i<=k;i++)
{
arr.push(arr.shift());
 
}
return arr;
}
var result=rotate(arr,4); //rotates/shifts the array elements from left to right by 4 places.
console.log(result);

// IFFE
(function(arr,k){
    for(let i=1;i<=k;i++)
{
arr.push(arr.shift());
}
console.log(arr);
})([1,2,3,4,5],4); //rotates/shifts the array elements from left to right by 4 places.

//output=> [ 5, 1, 2, 3, 4 ]
