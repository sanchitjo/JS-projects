/*1.Load the rest countries data using html and script.js file and run a for loop on the data 
    and print all the country names in the console.*/
var request = new XMLHttpRequest();

request.open ('GET', 'https://restcountries.eu/rest/v2/all', true ); // true is used to prevent error

request.send();

request.onload=function(){
var data = JSON.parse(this.response);
console.log(data);
for(var i=0; i<data.length; i++){
    console.log(data[i].name);
}
}
