import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchData: any;

  constructor(
    private router: Router,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((response) => {
    //   const queryParams = response;
    //   if (queryParams.get('query')=== null){
    //     this.router.navigate(["/home"])
    //   } else {
    //     this.movieService.runSearch(queryParams.get('query').subscribe((response)=>{
    //       console.log(response);
    //       this.searchData = response;
    //     })
  }

  search = (term: string): void => {
    this.router.navigate(['/search'], {
      queryParams: { query: term },
    });
  };
}
