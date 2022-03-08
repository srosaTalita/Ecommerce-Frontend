import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  nomeProduto: string;
  produtos: string[];


  constructor(private cartService: CartService) {
    this.nomeProduto = "Produtos";
    // var servico = new CartService();
    this.produtos = this.cartService.getProdutos();

  }

  ngOnInit(): void {
  }

}
