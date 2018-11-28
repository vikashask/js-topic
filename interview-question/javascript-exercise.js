// 1 Remove duplicate from array and output should ne [1,2,5,6,7]
let number = [1,2,2,5,5,6,7];
Console.log([ ...new Set(numbers)]);

// 2 Difference between let and const
let fun = function() {
    {
        let l = 'let';
        var v = 'var';
    }
    console.log(v);
    console.log(l);
    
}

fun();
