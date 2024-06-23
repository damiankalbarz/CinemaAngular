
import { Component, OnInit } from '@angular/core';
import { FilmShowService, FilmShow } from '../../services/filmShow.service';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-film-show-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './film-show-list.component.html',
  styleUrls: ['./film-show-list.component.less']
})
export class FilmShowListComponent implements OnInit {
  filmShows: FilmShow[] = [];

  constructor(private filmShowService: FilmShowService) { }

  ngOnInit(): void {
    this.filmShowService.getFilmShows().subscribe(
      (data: FilmShow[]) => {
        this.filmShows = data;
      },
      (error) => {
        console.error('Error fetching film shows:', error);
      }
    );
  }

}
