import { Component, Input, OnInit, Output } from '@angular/core';
import { List } from 'src/app/list';
import { ListsService } from 'src/app/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  @Input() lists : List[] = [];
  @Input() isCompleted: boolean = true
  @Input() isLoaded:boolean = false

  constructor(private ListSvc:ListsService) { }

  ngOnInit(): void {
    if(this.isCompleted){
    this.ListSvc.getAllLists()
    .then(res => {
      this.lists = res.filter((p:List) => p.completed == true)
      this.isLoaded = true
    })
  }
  }
  deleteTodo(list:List):void{
    this.lists = this.ListSvc.deleteTodo(list, this.lists)
  }

  completed(list:List):void{
    this.lists = this.ListSvc.setCompleted(list, this.lists)
  }

  add(list:List):void{
    this.ListSvc.addTodo(list).then(list => this.lists.push(list))
  }
}
