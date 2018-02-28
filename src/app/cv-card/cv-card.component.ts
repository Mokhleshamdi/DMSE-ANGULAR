import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/Personne';
import {EmbListService} from '../emb-list.service';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})

export class CvCardComponent implements OnInit {

  @Input() selectedPersonne : Personne;

  isHovered = false;

  constructor(private embaucheService : EmbListService) { }

  ngOnInit() {

  }

  embaucher(personne) {
    this.embaucheService.addPersonne(personne);
  }

  hover(state) {
    this.isHovered = state;
  }

}
