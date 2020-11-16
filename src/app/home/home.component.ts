
import { Swiper } from 'swiper/bundle';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-swiper-wrapper';
// import { OwlOptions } from 'ngx-owl-carousel-o';

import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingData: any;

  genres: any;
  // @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;
  constructor(private movieService: MovieService) {}

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  };

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 600,
  //   navText: ['&#8249', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 2,
  //     },
  //     760: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 4,
  //     },
  //   },
  //   nav: true,
  // };


  constructor(private movieService: MovieService) {}


  ngOnInit(): void {
    this.movieService.getTrending().subscribe((response) => {
      this.trendingData = response;

    });

    this.movieService.getGenreList().subscribe((response) => {
      this.genres = response;
    });
  }

  // nextSlide() {
  //   this.config.navigation(this.nextSlide);
  // }
  // previousSlide() {
  //   this.usefulSwiper.swiper.slidePrev();
  // }
  // slideToThis(index: any) {
  //   this.usefulSwiper.swiper.slideTo(index);
  // }

      console.log(this.trendingData);
    });
  }

}
