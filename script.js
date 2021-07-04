/*3.Generate API key using https://openweathermap.org/guide & print the current weather data of temperature
    in the console by lat lang of 250 countries by their names.*/
    var request = new XMLHttpRequest();
    request.open('GET', 'https://restcountries.eu/rest/v2/all',true);
    request.send();
    request.onload = function(){
        var data = JSON.parse(this.response);
        console.log(data);
            
            for(var i in data){
                try{
                    var name = data[i].name;
                var lang = data[i].latlng;
                if(lang.length===0) throw new error("Longitude is not found");
                weatherdata(name,...lang);
                }
                catch(e){
                    console.log("Invalid coordinates for the country"+name+" "+e.message);
                }
            }
        
        
        
    }
    var weatherdata = function(name,lat,lang){
        //console.log(name+" "+lat+" "+lang);
        var request= new XMLHttpRequest();
        var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=c6366baf8aac9bd1538309c7ee23037d&units=metric';
        request.open('GET',url,true);
        request.send();
        request.onload = function(){
            try{
                var res = JSON.parse(this.response);
            console.log(`${name} : ${res.main.temp}`);
            }
            catch(e){
                console.log("undefined response"+name);
            }
        }
    
    }