import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from './../model/Card';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card = {} as Card;
  msg:string = '';

  constructor(private cardService:CardService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros)=>{
      if(parametros['id']){
        this.card.id = parametros['id'];
        this.updatePage();
      }});
  }

  save(){
    this.cardService.save(this.card).subscribe((msg)=>{
      this.msg = msg;
      this.clean();
    });}

  private clean(){
    this.card = {} as Card;
  }

  private updatePage(){
    this.cardService.readById(this.card.id).subscribe((c:Card)=>this.card = c);
  }

}
