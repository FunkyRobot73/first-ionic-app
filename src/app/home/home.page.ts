import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private navCtrl:NavController, private router:Router) {

  }


  navigateForward(){
    // this.navCtrl.navigateForward("about");
    // this.router.navigate(['about']);
    this.router.navigateByUrl("about");
  }
}