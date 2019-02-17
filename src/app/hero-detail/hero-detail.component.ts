import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  hero: Hero ;


  constructor( 
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { 
      console.log("Hai I a hero-detail construtor");
    }

  ngOnInit() {
    this.getHero();
    console.log("Hai I a hero-detail ngOnInit");
  }
  // {id}
  getHero(): void{
     var theID = +this.route.snapshot.paramMap.get('id');
     this.heroService.getHero(theID).subscribe(babaw => {
      this.hero = babaw;
      console.log("this is the rturned hero data" + babaw.name);

     });
     
  }
  //commit
  //commit2
  goBack():void {
    this.location.back();
  }
}