import { Component }      from '@angular/core';
import { MovieService }   from '../../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  providers: [MovieService]
})

export class MoviesComponent {
  listPopularMovies:Array<Object>;
  listTheaters:Array<Object>;
  qMovie:string;
  searchRes:Array<Object>;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe(res => {
      this.listPopularMovies = res.results;
    })

    this._movieService.getInTheaters().subscribe(res => {
      this.listTheaters = res.results;
    })
  }

  searchMovies() {
    this._movieService.searchMovies(this.qMovie).subscribe(res => {
      this.searchRes = res.results;
    });
  }
}
