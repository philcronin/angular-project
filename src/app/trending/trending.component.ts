import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  @Input() slideRef: any;
  @Input() genreList: any;
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w185';
  image: string = '';
  movieGenres: any;
  constructor() {}

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
