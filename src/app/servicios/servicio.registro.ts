import { registro } from '../modelo/registro';
import { Injectable } from "@angular/core";
//var registro_lista=[]

var registro_lista=JSON.parse(localStorage['registro'] || '[]') ;

@Injectable()
export class servicioRegistro{
    constructor(){

    }
    AgregarRegistro(id,lat,long,name,date){
        
        var newRegistro={
            id:id,
            latitud:lat,
            longitud:long,
            name:name,
            fecha:date
        };
        //console.log(newRegistro);
        registro_lista.push(newRegistro)
        this.guardarDatos(newRegistro)
        this.persistencia();

    }
    persistencia(){
        let saber =localStorage['registro']= JSON.stringify(registro_lista);
        //console.log(saber)
       // return saber;
    }
    mostrarVector(){
        return registro_lista;
    }
    obtenerStorage(){
        let ubicacion = JSON.parse(localStorage.getItem('registro'))
        //console.log(ubicacion)
        return ubicacion
    }
    guardarDatos(registro){
        localStorage.setItem('Ubicacion',JSON.stringify(registro));
    }
    obtenerCoordenadas(poss){

        var registro_coordenadas=registro_lista[poss]
        //var latitud=registro_coordenadas.latitud
        //var longitud=registro_coordenadas.longitud

        return registro_coordenadas;
    }
    borrarRegistro(poss){
        registro_lista.splice(poss,1)
        this.persistencia();
        //console.log('borrar')
    }
    
}
