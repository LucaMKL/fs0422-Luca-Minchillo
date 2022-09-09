import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/list';
import { ListsService } from 'src/app/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists : List[] = [];


  isLoaded:boolean = false

  constructor(private ListSvc:ListsService) { }

  ngOnInit(): void {
    this.ListSvc.getAllLists()
    .then(res => {
      this.lists = res
      this.isLoaded = true
    })
  }
  delete(list:List):void{
    this.lists = this.ListSvc.deleteTodo(list)
  }
  completed(list:List):void{
    this.lists = this.ListSvc.setCompleted(list)
  }
  add(list:List):void{
    this.ListSvc.addTodo(list).then(list => this.lists.push(list))
  }
}
