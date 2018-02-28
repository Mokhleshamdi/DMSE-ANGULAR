import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/Personne';
import {LesCvService} from '../les-cv.service';

@Component({
  selector: 'app-form-personne',
  templateUrl: './form-personne.component.html',
  styleUrls: ['./form-personne.component.css']
})
export class FormPersonneComponent implements OnInit {

  name: string;
  firstname: string;
  job: string;
  path: string;

  constructor(private cvService: LesCvService) { }

  ngOnInit() {
  }

  treatForm(myform) {
    console.log(myform);

    const personne = new Personne(this.name, this.firstname, this.job, this.path );
    console.log(personne);
    this.cvService.addPersonne(personne);
  }

}
