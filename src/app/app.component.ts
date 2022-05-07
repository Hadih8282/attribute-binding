import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isCorrect: boolean = false;

  isModified: boolean = false;
  isCancelled: boolean = true;

  switchProperty: string = "a";

  users: string[] = ['amin', 'reza', 'fati', 'ahmad', 'mina'];

  userObj: any = [
    {
      id: 1,
      name:'Hadi'
    },
    {
      id: 2,
      name:'ali'
    },
    {
      id: 3,
      name:'reza'
    },
    {
      id: 4,
      name:'hamed'
    },
    {
      id: 5,
      name:'fati'
    },
  ];

  styles = {};
  classes = {};

  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '8rem',
      'color': 'red'
    };

    this.classes = {
      'big-font-size': this.isModified,
      'cancelled-color': this.isCancelled
    };
  }

  public addNewUser() {
    this.userObj = [
      {
        id: 1,
        name:'Hadi'
      },
      {
        id: 2,
        name:'ali'
      },
      {
        id: 3,
        name:'reza'
      },
      {
        id: 4,
        name:'hamed'
      },
      {
        id: 5,
        name:'fati'
      },
      {
        id: 6,
        name:'nani'
      }
    ];
  }

  public trackByFundc( el: any) {
    return el.id;
  };


}
