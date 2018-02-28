import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';
import {Http} from '@angular/http';


@Injectable()
export class LesCvService {
  private mesPersonnes: Personne[];
  private url: string;
  constructor(private http:Http) {
    this.url= 'https://dmse-83d8f.firebaseio.com/.json'
    this.mesPersonnes = [
      new Personne(
        'Mokhles',
         'Hamdi',
         'developper',
        'rotating_card_profile2.png'
  ),
      new Personne(
        'Saif',
         'BenGhdhehom',
         'developper',
        'rotating_card_profile3.png'
      ),
    ];
  }
  getPersonnes(){
    return this.mesPersonnes;
  }

  addPersonne(personne: Personne) {
    this.mesPersonnes.push(personne);
  }
  loadPersonne(){
    return this.http.get(this.url);
  }
  savePersonne(){
    return this.http.put(this.url, this.mesPersonnes);
  }
}

