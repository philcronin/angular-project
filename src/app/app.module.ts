import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { PopularComponent } from './popular/popular.component';
import { SearchComponent } from './search/search.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    TopRatedComponent,
    PopularComponent,
    SearchComponent,
    MovieInfoComponent,
    WatchListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
