import Swiper, { Navigation, Pagination } from 'swiper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';

import { MovieService } from '../movie.service';
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingData: any;

  genres: any;
  topRated: any;
  popular: any;
  // @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;
  constructor(private movieService: MovieService, private router: Router) {}

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

  ngOnInit(): void {
    this.movieService.getTrending().subscribe((response) => {
      this.trendingData = response;
    });

    this.movieService.getGenreList().subscribe((response) => {
      this.genres = response;
    });

    this.movieService.getTopRated().subscribe((response) => {
      this.topRated = response;
    });

    this.movieService.getPopular().subscribe((response) => {
      this.popular = response;
    });

    const swiper = new Swiper('div', this.config);
  }

  search = (term: string): void => {
    this.router.navigate(['/search'], {
      queryParams: { query: term },
    });
  };
}
