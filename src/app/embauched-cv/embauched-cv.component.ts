import { Component, OnInit } from '@angular/core';
import {EmbListService} from '../emb-list.service';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-embauched-cv',
  templateUrl: './embauched-cv.component.html',
  styleUrls: ['./embauched-cv.component.css']
})
export class EmbauchedCvComponent implements OnInit {

  constructor(private embaucheService: EmbListService) { }

  mesPeronnesAEmbaucher: Personne[];

  ngOnInit() {

    this.mesPeronnesAEmbaucher = this.embaucheService.getPeronnesAEmbaucher();
  }

}
