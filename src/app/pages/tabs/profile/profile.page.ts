import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOpts = {};
  stories: any[] = [];
  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.stories = [
      { name: 'New' },
      { name: '1', src: 'assets/imgs/circles/logo1.png' },
      { name: '2', src: 'assets/imgs/circles/logo2.png' },
      { name: '3', src: 'assets/imgs/circles/logo3.png' },
      { name: '4', src: 'assets/imgs/circles/logo4.png' },
      { name: '5', src: 'assets/imgs/circles/logo5.png' },
      { name: '6', src: 'assets/imgs/circles/logo6.png' },
      { name: '7', src: 'assets/imgs/circles/logo5.png' },
    ];
    this.slideOpts = {    
      slidesPerView: this.checkScreen(),
      slideShadows: true  
    };
    this.buttonItems = [
      {value: 'grid', icon: 'grid'},
      {value: 'reels', icon: 'film'},
      {value: 'photos', icon: 'images'},
    ];
    this.posts = [
      { id: 1, url: 'assets/imgs/posts/n7.gif'},
      { id: 2, url: 'assets/imgs/posts/n2.jpg'},
      { id: 3, url: 'assets/imgs/posts/n1.jpg'},
      { id: 4, url: 'assets/imgs/posts/n4.jpg'},
      { id: 9, url: 'assets/imgs/posts/n5.gif'},
      { id: 6, url: 'assets/imgs/posts/n6.gif'},
      { id: 5, url: 'assets/imgs/posts/n7.gif'},
      { id: 8, url: 'assets/imgs/posts/n1.jpg'},
      { id: 7, url: 'assets/imgs/posts/n2.jpg'},
      { id: 10, url: 'assets/imgs/posts/n6.gif'},
      { id: 11, url: 'assets/imgs/posts/n6.gif'},
      { id: 12, url: 'assets/imgs/posts/n5.gif'},
    ];
  }

  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(5.5);
      case 340 <= innerWidth && innerWidth <= 500:
        return this.checkLength(5.5);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(6.5);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(7.5);
      case 901 <= innerWidth:
        return this.checkLength(9.5);
    }
  }

  checkLength(val) {
    let length = this.stories.length;
    return val < length ? val : length;
  }

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }

  async options() {
    const options = {
      component: OptionComponent,
      cssClass: 'custom-modal',
      swipeToClose: true //ios only
    };
    const modal = await this.modalCtrl.create(options);
    await modal.present();
    // const {data} = await modal.onWillDismiss();
  }

}
