let no=Number(prompt("enter the no: "))
if((no%3==0)&&(no%5==0)){
    document.write("Fizz and Buzz")
}
else if(no%3==0){
    document.write("Buzz")
}
else if(no%5==0){
    document.write("Fizz")
}
else{
    document.write(+no)
}