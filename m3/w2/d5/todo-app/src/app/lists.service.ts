import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {


  constructor() {


  }

  API: string = 'http://localhost:3000/todos'

  listArray:List[] = [

  ]

  getAllLists():Promise<List[]>{
   /* return fetch(this.API).then(res => res.json())
  }*/
  return new Promise<List[]>((resolve, reject) => {
    setTimeout(() => {
      let call = fetch(this.API).then(res => res.json())
      resolve(call)
    },2000)
  })
  }

  addTodo(list: List): Promise<List> {

    let options = {
      method: 'POST',
      body: JSON.stringify(list),
      headers: { "content-type": "application/json" }
    }
    let listCopy = Object.assign({}, list);
    this.listArray.push(listCopy);

    return fetch(this.API, options)
      .then(res => res.json())


  }


  deleteTodo(list: List):List[]{

    let options = {
      method: 'DELETE',
      headers: { "content-type": "application/json" }
    }

    fetch(this.API + '/' + list.id, options)

    let index = this.listArray.findIndex(l => l.id === list.id);
    this.listArray.splice(index,1)
    return this.listArray
  }


  setCompleted(list: List): List[] {
    list.completed = !list.completed

    let options = {
      method: 'PUT',
      body: JSON.stringify(list),
      headers: { "content-type": "application/json" }
    }

    fetch(this.API + '/' + list.id, options)

    return this.listArray
  }

  /*getCompletedList():List{
    return this.listArray.filter(p => p.done === isDone)
  }*/
}
