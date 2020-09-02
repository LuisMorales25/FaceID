import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private faio:FingerprintAIO, private router: Router,private modalctlr:ModalController) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/home']);
  }

}
