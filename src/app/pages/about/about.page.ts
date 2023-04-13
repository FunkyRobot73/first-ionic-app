import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AboutPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  navigateBackward(){
    this.navCtrl.back();
    // this.navCtrl.navigateBack('home')  //Alternate "back" to Home Page
  }

}
