import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  constructor() {

    this.todos = [
      {
        sno: 1,
        title: 'This is a Title one',
        desc: 'this is lion',
        active: true
      },
      {
        sno: 2,
        title: 'This is a Title two',
        desc: 'its a tiger',
        active: true
      },
      {
        sno: 3,
        title: 'This is a Title three',
        desc: 'its a dog',
        active: true
      }
    ]

  }

  ngOnInit(): void { }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo)
    console.log('indexof', index);

    this.todos.splice(index, 1)
  }

}
