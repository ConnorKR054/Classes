function isPalindrome(N)
{
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++)
    {
        if (str[i] != str[len - 1 - i ])
            return false;
    }
    return true;
}


function isPalinArray(arr, n)
{
    
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}
 
let arr = [ 121, 131, 20 ];

let n = arr.length;

let res = isPalinArray(arr, n);
if (res == true)
    console.log("Array is a PalinArray");
else
    console.log("Array is not a PalinArray");