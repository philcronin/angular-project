import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  trendingBaseUrl: string = 'https://api.themoviedb.org/3/trending/movie/week';
  key: string = '4d6b6d705d0ccdf5166bc895195797a2';
  mediaType = 'movie';
  timeWindow = 'week';

  genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';

  topRatedUrl: string = 'https://api.themoviedb.org/3/movie/top_rated';

  popularUrl: string = 'https://api.themoviedb.org/3/movie/popular';

  constructor(private http: HttpClient) {}
  getTrending = () => {
    return this.http.get(this.trendingBaseUrl, {
      params: {
        api_key: this.key,
        media_type: this.mediaType,
        time_window: this.timeWindow,
      },
    });
  };

  getGenreList = () => {
    return this.http.get(this.genreUrl, {
      params: {
        api_key: this.key,
      },
    });
  };

  getTopRated = () => {
    return this.http.get(this.topRatedUrl, {
      params: {
        api_key: this.key,
      },
    });
  };

  getPopular = () => {
    return this.http.get(this.popularUrl, {
      params: {
        api_key: this.key,
      },
    });
  };
}
