import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';

@Injectable()
export class EmbListService {

  private personneAEmbauchers: Personne[];

  constructor() {
    this.personneAEmbauchers = [];
  }

  getPeronnesAEmbaucher(){
    return this.personneAEmbauchers;
  }

  addPersonne(personne){
    if(this.personneAEmbauchers.indexOf(personne)==-1)
      this.personneAEmbauchers.push(personne);
  }

  deleteTodo(personne : Personne){
    var index = this.personneAEmbauchers.indexOf(personne);
    if (index > -1) {
      this.personneAEmbauchers.splice(index, 1);
    }
  }

  logPersonne(personne: Personne){
    console.log(personne);
  }

  logPersonnes(){
    console.log(this.personneAEmbauchers);
  }

}
