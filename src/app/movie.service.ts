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
}
