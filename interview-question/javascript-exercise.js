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


// 3 Immediately scope function
let fun = function() {
    { 
        (function(){
            let l = 'let';
            var v = 'var';
        })();
    }
    console.log(v);
    console.log(l);
    
}

fun();

//4 O/p
console.log(5<6<7); // true<7  // 1<7 // true

console.log(5>6>7); // true > 6 false true means 1


// 5 o/p

let a = () => arguments;
console.log(a("hi"));

// 6 o/p

let b = (...n) => {return n};
console.log(b("hi"));

// 7 o/p

let x  = function(){
    return {
        mess:'hi'
    }
}
console.log(x());

// 8 how to prevent addding property

let profile = {
    name:'vikash'
}

profile.age = 3;
console.log(profile);

// use Object.freeze(profile)

//  9 update propery only not to add

 Object.seal(profile)

//10 Add property but read only


let profile = {
    name:'vikash'
}

Object.defineProperties(profile,'age',{
    value:3,
    writable:false
})

profile.name = 'verma';
profile.age = 14;

console.log(profile);


// 11 why infinte
console.log(Math.max()); // - infinity 


//12 get only array from object 

// 1.way
let x = {
    a:1,
    b:2
};

const xArr = Object.entries(x);

// 2nd way
const Arrayx = []
for(let i in x){
    Arrayx.push(i);
}


// 13 reverse string
let x = "hi";
let y = "ih";

const reverseStr = (str) =>{
    str.split('').reverse().join('')
}

console.log(reverseStr === y);

// 14 object value

// is this correct
const obj  = {
    a:1,
    b:2,
    getA(){
        console.log(this.a);
    },
    getB(){
        console.log(this.b);
    }
}

obj.getA().getB();
// no

// correct one is 
const obj  = {
    a:1,
    b:2,
    getA(){
        console.log(this.a);
        return this; // have to return
    },
    getB(){
        console.log(this.b);
    }
}

obj.getA().getB();

// 15 print this
[1,2].print();   // 1,2

// 1st way
Array.prototype.print = () => {
    console.log(`${this[0]} , ${this[1]}`);
} 

// 16 reverse string
const a =function(x){
    this.x = x;
}
const b =function(x,y){
    this.y = y;
}
const newB = new b('x','y');
newB.getX();
newB.getY();

// 17 clone 
const obj = {
    a:{
        b:{
            c:1
        }
    }
}
const clone  = Object.assign({},obj);

clone.a.b.c = 2;
console.log(obj.a.b.c);

// 18 reverse string
const a = [1,2,3,3];
const b = [2,56,8,7];

const c = a.concat(b).sort((a,b) => a>b );







