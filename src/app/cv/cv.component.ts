import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/Personne';
import {LesCvService} from '../les-cv.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  add: boolean;
  hide: boolean;
  personne: Personne;
  constructor(private cvservice : LesCvService) { }

  ngOnInit() {
    this.add = false;
    this.hide = true;
  }
  addVisible(){
    this.add = true;
  }
  hideVisible(){
    this.hide = false;
  }
  getPersonne(event){

    this.personne = event.selectedItem;
  }
  saveData(){
    this.cvservice.savePersonne().subscribe(
      (response : Response) => {
        console.log(response);
      }
    );
  }
}
