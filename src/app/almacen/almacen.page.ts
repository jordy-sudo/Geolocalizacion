import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { registro } from '../modelo/registro';
import { servicioRegistro } from '../servicios/servicio.registro';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.page.html',
  styleUrls: ['./almacen.page.scss'],
  providers:[servicioRegistro]
})
export class AlmacenPage implements OnInit {

 // public ubi_lat:any;
 // public ubi_long:any;
 public mostrar:any;
  constructor(private route:ActivatedRoute,private servicio:servicioRegistro,private navegar:NavController,public toastController: ToastController) {
    
   }
   
  fecha=new Date;
  id=this.route.snapshot.paramMap.get('id');
  ubi_lat=this.route.snapshot.paramMap.get('lat');
  ubi_long=this.route.snapshot.paramMap.get('long');

  ngOnInit() {
    if(this.ubi_lat==undefined){
      this.mostrar=this.servicio.mostrarVector();
    }else{
      this.mostrar=this.servicio.mostrarVector();
      this.servicio.AgregarRegistro(this.id,this.ubi_lat,this.ubi_long,'Jordy',this.fecha);
      //this.route.params.subscribe();
    }
   
  }


  abrirMapa(poss){
   var coord=this.servicio.obtenerCoordenadas(poss);
   console.log(coord)
   var latitud= coord.latitud
   var longitud=coord.longitud
   //console.log(latitud,longitud)
   this.navegar.navigateForward(`mapa/${latitud}/${longitud}`)
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ubicacion Eliminada',
      duration: 2000
    });
    toast.present();
  }
  eliminar(poss){
    this.servicio.borrarRegistro(poss);
    this.presentToast()
  }

}
