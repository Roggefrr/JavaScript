function Analisalados() {
    var lado1 = Number(document.getElementById("Lado1").value);
    var lado2 = Number(document.getElementById("Lado2").value);
    var lado3 = Number(document.getElementById("Lado3").value);

    if ((lado1+lado2>lado3)&&(lado2+lado3>lado1)&&(lado1+lado3>lado2)){
        if ((lado1==lado2) && (lado1==lado3)) {
            document.write("TRIÂNGULO EQUILATERO")
        }else{
            if ((lado1!=lado2)&&(lado1!= lado3)&&(lado2!=lado3)) {
             document.write("TRIÂNGULO ESCALENO")
            }else{
            document.write("TRIÂNGULO ISOCELES")
            }
        }
        }else{
        document.write("NÃO É TRIÂNGULO")
        }
    }
