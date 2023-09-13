import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChildren('instaVideo') videos: QueryList<any>;
  feeds: any[] = [
    {
      id: 1, 
      logo: 'assets/imgs/jainish.png', 
      username: 'kano_jk_07', 
      location: 'India', 
      src: 'assets/videos/ds.mp4',
      description: 'Hello jainish,',
      likes: 15
    },
    {
      id: 2, 
      logo: 'assets/imgs/jainish.png', 
      username: 'kano_jk_07', 
      location: 'India', 
      src: 'assets/imgs/posts/ds.jpg',
      description: 'Hello jainish,',
      likes: 80,
      image: true
    },
    {
      id: 3, 
      logo: 'assets/imgs/jainish.png', 
      username: 'kano_jk_07', 
      location: 'India', 
      src: 'assets/videos/video_of_funny_cat (1080p).mp4',
      description: "Hello jainish,",
      likes: 4
    },
    {
      id: 4, 
      logo: 'assets/imgs/jainish.png', 
      username: 'kano_jk_07', 
      location: 'India', 
      src: 'assets/videos/kv.mp4',
      description: 'Hello jainish,',
      likes: 56
    },
    {
      id: 5, 
      logo: 'assets/imgs/jainish.png', 
      username: 'kano_jk_07', 
      location: 'India', 
      src: 'assets/imgs/posts/ds.jpg',
      description: 'Hello jainish,',
      likes: 150,
      image: true
    },              
    {
      id: 6, 
      logo: 'assets/imgs/jainish.png', 
      username: 'kano_jk_07', 
      location: 'India', 
      src: 'assets/imgs/posts/ds.jpg',
      description: 'Hello jainish,',
      likes: 200,
      image: true
    },
    {
      id: 7, 
      logo: 'assets/imgs/jainish.png', 
      username: 'kano_jk_07', 
      location: 'India', 
      src: 'assets/imgs/posts/ds.jpg',
      description: 'Hello jainish,',
      likes: 100,
      image: true
    }
  ];
  nowPlaying = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {    
    this.didScroll();
  }

  toggleWrap(feed) {
    feed.wrap = !feed.wrap;
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  didScroll(event?) {
    console.log(event);
    if(this.nowPlaying && this.isElementInViewport(this.nowPlaying)) return;
    else if(this.nowPlaying && !this.isElementInViewport(this.nowPlaying)) {
      this.nowPlaying.pause();
      this.nowPlaying = null;
    }

    this.videos.forEach(player => {
      console.log('player', player);

      if(this.nowPlaying) return;

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);

      if(inView) {
        this.nowPlaying = nativeElement;
        this.nowPlaying.muted = true;
        this.nowPlaying.play();
      }
    });
  }

}
