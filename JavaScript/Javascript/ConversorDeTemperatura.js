function converterCF(){
    var celsius = document.getElementById("Celcius").value; 
    document.write((celsius*9/5)+32 + " " + "Fahrenheit"); 
};
function converterFC(){
    var Fahrenheit = document.getElementById("Fahrenheit").value;
    document.write((Fahrenheit-32)*5/9 + " " + "Celsius");
};

