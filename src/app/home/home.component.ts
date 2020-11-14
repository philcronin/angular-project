import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingData: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTrending().subscribe((response) => {
      this.trendingData = response;
      console.log(this.trendingData);
    });
  }
}
