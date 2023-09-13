import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  @ViewChild(IonSlides) ionSlides: IonSlides
  slideOpts: any = {};
  slides: any[] = [];
  activeTab = 0;
  activities: any[] = [];

  constructor() { }

  ngOnInit() {
    this.slides = [
      {id: 1, name: 'All activity'},
      {id: 2, name: 'Likes', notifications: 805},
      {id: 3, name: 'Comments', notifications:970},
      {id: 4, name: 'Mentions'},
    ];
    this.slideOpts = {    
      slidesPerView: this.checkScreen(),
      slideShadows: true
    };
    this.activities = [
      {id: 1, username: 'Radha_07', user_profile: 'assets/imgs/2.png', time: '1 min', activity: 'follow'},
      {id: 2, username: 'divyesh_512', user_profile: 'assets/imgs/6.png', time: '5 mins', activity: 'comment', comments: 'Great content without a doubt. I am your big fan of you.', post: 'assets/imgs/posts/2.jpg'},
      {id: 3, username: 'rano_55', user_profile: 'assets/imgs/4.png', time: '1d', activity: 'follow'},
      {id: 4, username: 'nikita.chaurasia.14', user_profile: 'assets/imgs/3.png', time: '1w', activity: 'follow'},
      {id: 5, username: 'ruchita_08', user_profile: 'assets/imgs/5.png', time: '5 mins', activity: 'comment', comments: 'Nice design. It\'s good to see different layouts and design for such commons elements. Good job!.', post: 'assets/imgs/posts/2.jpg'},
      {id: 6, username: 'er_kano_025', user_profile: 'assets/imgs/1.png', time: '3w', activity: 'follow'},
    ];
    
  }

  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(3.6);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(3.6);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(4.6);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(5.6);
      case 901 <= innerWidth:
        return this.checkLength(6.6);
    }
  }

  checkLength(val) {
    let length = this.slides.length;
    return val < length ? val : length;
  }
  
  changeTab(index) {
    this.activeTab = index;
    this.ionSlides.slideTo(index);
  }

  likeComment(item) {
    item.like = !item?.like;
  }

}
