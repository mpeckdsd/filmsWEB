import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from '../film-service.service';
import { Film } from '../models/film'

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponentComponent implements OnInit {

  films:any = [];
  constructor(public film: FilmServiceService) { }

    ngOnInit() {
        this.getFilms();
    }

    getFilms() {
        this.films = [];
        this.film.getAllFilms().subscribe((data: {}) => {
            console.log(JSON.stringify(data));
            this.films = data;
            // for (let d of data){
            //     let f =  new Film(d.title, d.description, d.release_year, d.rating, d.replacement_cost);
            //     this.films.push(f);
            // }
        });

    }

}
