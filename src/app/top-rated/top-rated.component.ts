import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit {
  @Input() slideRef: any;
  @Input() genreList: any;
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w185';
  image: string = '';
  movieGenres: any;
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

  ngOnInit(): void {
    this.image = this.getImage(this.slideRef);

    this.getMovieGenres(this.slideRef);
  }

  getImage = (slideRef: any): string => {
    return this.imageBaseUrl + slideRef.poster_path;
  };

  getMovieGenres = (slideRef: any) => {
    const movieGenres: string[] = [];
    this.genreList.forEach((genre: any) => {
      if (slideRef.genre_ids.includes(genre.id)) {
        movieGenres.push(genre.name);
      }
    });
    this.movieGenres = movieGenres;
  };
}
