import { Card } from './../model/Card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  readonly apiUrl:string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'thhp://localhost:8090/api/card';
  }

  save(card:Card):Observable<string>{
    if(card.id){
      return this.httpClient.put(`${this.apiUrl}/${card.id}`, card, {responseType: 'text'})
    }
    return this.httpClient.post(this.apiUrl, card, {responseType: 'text'})
  }

  read():Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.apiUrl);
  }

  readById(id:number):Observable<Card> {
    return this.httpClient.get<Card>(`${this.apiUrl}/${id}`);
  }

  delete(id:number):Observable<string>{
    return this.httpClient.delete(`${this.apiUrl}/${id}`, {responseType: 'text'})
  }
}
