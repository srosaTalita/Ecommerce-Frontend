import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  getProdutos(){
    return ["Celular", "Televisão", "Suporte", "Liquidificador"];
  }
}
