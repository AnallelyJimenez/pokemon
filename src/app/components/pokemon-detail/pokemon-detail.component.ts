import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';
import { DataService } from 'src/app/services/data.service'

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.styl']
})
export class PokemonDetailComponent implements OnInit {

  public pokemonDetail: any = [];

  constructor(public dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPokemon('', 1);
  }
  

  getPokemon(link: string, id: number): void {
    this.dataService.getPokemon(link, id)
      .subscribe(
        (data: any) => {
          this.pokemonDetail.push({
            name: data.name,
            types: data.types,
            front_default: data.sprites.other.dream_world.front_default,
            weight: data.weight,
            height: data.height,
            stats: data.stats,
            abilities: data.abilities
          });
          this.pokemonDetail = this.pokemonDetail[0];
        }
      )
  }

}
