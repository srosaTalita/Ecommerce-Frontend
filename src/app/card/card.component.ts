import { Component, OnInit } from '@angular/core';
import { Card } from './../model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card = {} as Card;
  msg:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
