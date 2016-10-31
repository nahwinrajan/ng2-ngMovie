import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
  apiKey:string;

  constructor(private _jsonp:Jsonp) {
    this.apiKey = '91de4694a504cf666081a5bbaafa3d79';
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(res => res.json())
  }

  getInTheaters() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-10-01&primary_release_date.lte=2016-10-31&api_key=' + this.apiKey)
      .map(res => res.json())
  }

  searchMovies(qMovie:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + qMovie + '&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(res => res.json())
  }

  getMovie(movieId:string) {
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + movieId + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
      .map(res => res.json())
  }
}
