for (let i=1; i<=3; i++){
    var edad=prompt(`Introduce la edad[Persona${i}]`);
    var sexo=prompt(`Introduce el Sexo(masculino,femenino,otro)[Persona${i}]`);
    while ((!(isNaN(edad)))&&(sexo!="masculino" || sexo!="femenino" || sexo!="otro")){
       alert("La edad o el sexo esta mal");
       edad=prompt(`Introduce la edad[Persona${i}]`);
       sexo=prompt(`Introduce el Sexo(masculino,femenino,otro)[Persona${i}]`); 
    }
    if(i==1){
        var gente=edad+","+sexo+"|";
    }else{
        var gente=gente+edad+","+sexo+"|";
    } 
}
alert(gente);

