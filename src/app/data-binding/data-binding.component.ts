import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo = '';
  inputProduto: string;
  nomeProduto: string = "Celular Xiaomi";

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  constructor() {
    this.inputProduto = "Tv 32 polegadas"
  }

  ngOnInit(): void {
  }

}
