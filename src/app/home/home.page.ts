import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modaCtrl:ModalController) {
    setTimeout(() => {

      this.lockApp();
    }, 2000);
  }
  
  async lockApp(){
    const modal=await this.modaCtrl.create({
      component:LoginPage,
      backdropDismiss:false
    });
  }

}
