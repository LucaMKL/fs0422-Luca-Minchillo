import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/list';
import { ListsService } from 'src/app/lists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  API: string = 'http://localhost:3000/todos'

  notCompleted:List[] = []
  isLoaded:boolean = false;

  newList : List = {
    title: '',
    content: '',
    author: '',
    completed: false,
    id: undefined,
  }

  constructor(private listSvc:ListsService) { }

  ngOnInit(): void {
    this.listSvc.getAllLists()
    .then(res => {
      this.notCompleted = res.filter((p:List) => p.completed == false)
      this.isLoaded = true
    })
  }

  add(){
    this.listSvc.addTodo(this.newList)
    .then( res => this.notCompleted.push(res))
    this.newList.title = ""
  }

}


