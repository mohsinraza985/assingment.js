//chp 17 - 20 //
// question 1//
var arr = [ [] ,[] ]

// question 2//
var arr = [ [0,1,2,3] ,[1,0,1,2] ,[2,1,0,1] ] ;
console.log(arr)

// question 3//
for (var input = 1; input <= 10; input++) {
    console.log(input) ;
    }

// question 4//
var table = +prompt ("enter your table") ;
var table_lenght = +prompt ("enter table lenght") ;

for (var i =1 ; i <=15 ; i++){
    document.write(table + " x " + i + " = " + table*i + "<br/>")
}

// question 5//
var items = [ "apple", "banana" ,"mango" ,"orange" ,"strawberry"]

for (var i = 0; i < items.length ; i++){
    document.write(items[i] + "<br>")
}

// question 6//
document.write("<h1>Counting</h1>") ;
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
console.log(num) ;
document.write(num) ;

document.write("<h1>Reverse Counting</h1>") ;
var arr = [10,9,8,7,6,5,4,3,2,1] ;
console.log(arr) ;
document.write(arr) ;

document.write("<h1>Even</h1>") ;
var arr = [2,4,6,8,10,12,14,16,18,20] ;
console.log(arr) ;
document.write(arr) ;

document.write("<h1>Odd</h1>") ;
var arr = [1,3,5,7,9,11,13,15,17,19] ;
console.log(arr) ;
document.write(arr) ;

document.write("<h1>Series</h1>") ;
var arr = ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"] ;
console.log(arr) ;
document.write(arr) ;

// question 7//
var arr = ["cake", "apple pie", "cookie", "chips", "patties"] ;
var user = prompt("Welcome to Our Bakery. what do you want sir/ma'am" ) ;

if (user === "cake"){
    alert("cake is available at index 0 in our bakery")
}
else if (user === "apple pie" ){
    alert("apple pie is available at index 1 in our bakery")
}
else if (user === "cookie"){
    alert("cake is available at index 2 in our bakery")
}
else if (user === "chips"){
    alert("cake is available at index 3 in our bakery")
}
else if (user === "patties"){
    alert("cake is available at index 4 in our bakery")
}

else{
    alert ("not found")
}

// question 8//
var arr = [24, 53, 78, 91, 12]
document.write (arr + "<br>")
var largest = 0

for (i = 0 ; i <= largest ; i++){
    if(arr[i] > largest){
        var largest = arr[i]
    }
}

document.write ("largest num is " + largest)

// question 9//
var arr = [24, 53, 78, 91, 12] ;
document.write (arr + "<br>") ;
var smallest = arr[0] ;

for (i = 1 ; i<arr.length ; i++){
    if(arr[i] < smallest){
        smallest = arr[i]
    }
}

document.write ("smallest num is " + smallest)

// question 10//
