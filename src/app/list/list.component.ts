import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/Personne';
import {LesCvService} from '../les-cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() personnes : Personne[];
  @Output() sendPersonne = new EventEmitter();
  constructor(private cvservice: LesCvService) { }

  ngOnInit() {
    this.personnes = this.cvservice.getPersonnes();

  }
  selectPersonne(event){
    this.sendPersonne.emit(
      {
        'selectedItem': event.selectdItem
      }
    );

  }

}
