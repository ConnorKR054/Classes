var arr =["apple","ball","cat","cat","apple"]
var a = function(data)
{
    return data.filter((value,index)=>data.indexOf(value)!==index);
}
console.log(a(arr))