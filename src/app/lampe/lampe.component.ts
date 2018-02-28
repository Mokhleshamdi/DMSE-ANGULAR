import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css'],
  providers: []
})
export class LampeComponent implements OnInit {

  myClass : object;
  allumee : boolean;
  eteinte : boolean;
  constructor(private todoService : TodoService) {
    this.allumee = true;
    this.eteinte = false;
    this.myClass = {
      white: this.allumee,
      black: this.eteinte,
    };
  }

  ngOnInit() {
  }

  bouton(){
    this.todoService.logoTodos();
  }
}
