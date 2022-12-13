import { Component, OnInit } from '@angular/core';
import { TodoApiService } from 'src/app/services/todo-api.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private todoService: TodoApiService) { }

  todos: Todo[]=[];

  ngOnInit(): void {

  }

  getTodos(){
    this.todoService.getTodos().subscribe((todo) => {

    });
  }

}
