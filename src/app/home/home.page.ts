import { Component, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { registro } from '../modelo/registro';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitud:Number;
   longitud:Number;
   id:Number;
  constructor(private geolocation: Geolocation,private navegar:NavController,public toastController: ToastController) {}

  
 /* ngOnInit(){
    
  }*/

  obtener(){
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud= resp.coords.latitude
      this.longitud=resp.coords.longitude
      this.id=Math.floor(Math.random()*101);
      console.log(this.latitud)
      //this.navegar.navigateRoot(`almacen/${this.latitud}/${this.longitud}`);
      this.presentToast();
      //this.navegar.navigateForward(`almacen/${this.latitud}/${this.longitud}`);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ubicacion Guardada',
      duration: 1000
    });
    toast.present();
  }
  enviar(){

    if(this.latitud==undefined){
      this.navegar.navigateForward('almacen');
    }else{
      //var ubi = this.latitud;
      this.navegar.navigateForward(`almacen/${this.id}/${this.latitud}/${this.longitud}`)
      this.latitud=undefined;
      this.longitud=undefined;
      //this.navegar.
    }
    
   
    
  }
}
