import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() slideRef: any;
  @Input() genreList: any;
  searchData: any;
  filteredData: any = [];
  movies: Movie[] = [];
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w185';
  image: string = '';
  movieGenres: any;
  constructor(
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      const query = response.get('query');
      if (query === null) {
        this.getTrending();
      } else {
        this.search(query);
      }
    });
    console.log(this.movies);

    // this.getMovieGenres(this.slideRef);
  }

  getTrending = () => {
    this.movieService.getTrending().subscribe((response) => {
      this.searchData = response;
    });
  };

  search = (query: string) => {
    this.movieService.runSearch(query).subscribe((response) => {
      this.searchData = response;
      this.searchData.results.filter((movie: any) => {
        if (movie.media_type === 'movie') {
          const movieResult = this.makeMovie(movie);
          this.movies.push(movieResult);
        } else {
        }
      });
    });
  };

  makeMovie = (movie: any): Movie => {
    const newMovie: Movie = {
      title: movie.title,
      genre: movie.genre_ids,
      image: this.imageBaseUrl + movie.poster_path,
    };
    return newMovie;
  };

  // getMovieGenres = (slideRef: any) => {
  //   const movieGenres: string[] = [];
  //   this.genreList.forEach((genre: any) => {
  //     if (slideRef.genre_ids.includes(genre.id)) {
  //       movieGenres.push(genre.name);
  //     }
  //   });
  //   this.movieGenres = movieGenres;
  // };
}
