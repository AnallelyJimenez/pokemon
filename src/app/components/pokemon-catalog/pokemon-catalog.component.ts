import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'pokemon-catalog',
  templateUrl: './pokemon-catalog.component.html',
  styleUrls: ['./pokemon-catalog.component.styl']
})

export class PokemoCatalogComponent implements OnInit {

  public pokemons: any[] = [];
  public lenPokemons: any;
  
  constructor(public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData(0, 20);
  }

  getData(offset: number, limit: number): void {
    this.dataService.getData(offset, limit)
      .subscribe(
        (data: any) => {
          data.results.map((pokemon: any) => {
            this.getPokemon(pokemon.url, 1);
          });
          this.pokemons = [];
          this.lenPokemons = data.count;
        }
      )
  }

  getPokemon(link: string, id: number): void {
    this.dataService.getPokemon(link, id)
      .subscribe(
        (data: any) => {
          this.pokemons.push(data);
        }
      )
  }

  onPaginate(pageEvent: PageEvent) {
    const limit = pageEvent.pageSize;
    const offset = limit * pageEvent.pageIndex++;
    
    this.getData(offset, limit);
  }

}

