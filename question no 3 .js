//3.Do the below programs in arrow functions
//a. Print odd numbers in an array

        let numberArray = [1, 2, 3, 4, 5]

        numberArray.filter((item) => {

            return item % 2 !== 0;
            console.log("Odd Numbers in Number Array are: " + numberArray)

        });
//output=>[1,3,5]





//b.Convert all the strings to title caps in a string array

        let stringArray = ["how","are","you?"]
        stringArray = stringArray.map((item) => {
            return item.toUpperCase()
        })
        console.log(stringArray.join(" "))// .join will joins the data in an array 

//Output: HOW ARE YOU?


//c.Sum of all numbers in an array


        let numberArray = [1, 2, 3, 4, 5]
        let sum = numberArray.reduce((currentTotal, item) => {

            return currentTotal + item

        }, 0)

        console.log("Sum of elements in Number Array: " + sum) 

//Output: Sum of elements in Number Array: 15


//d.Return all the prime numbers in an array

        let numberArray = [1, 2, 3, 4, 5]
        console.log("Prime Number is Array are: " +
            numberArray.filter((item) => {

                for (let i = 2; i < item; i++) {
                    if (item % i === 0)
                        return false;
                }
                return item !== 1;

            })) 

//Output: Prime Number is Array are: 2,3,5


//e.Return all the palindromes in an array 

        let arrayPallindrome = [11,15,22,27,35,44]

        console.log("Pallindrome Numbers in array are: " +
            arrayPallindrome.filter((item) => {

                let temp = item + "";

                if (temp.split('').reverse().join('') === item + "")
                    return true

                return false

            })) 

//Output: Pallindrome Numbers in array are: 11,22,44
