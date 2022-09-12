import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {


  constructor() {


  }

  API: string = 'http://localhost:3000/todos'

  getAllLists():Promise<List[]>{

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

    return fetch(this.API, options)
      .then(res => res.json())


  }


  deleteTodo(list: List, listArr: List[]):List[]{

    let options = {
      method: 'DELETE',
      headers: { "content-type": "application/json" }
    }


    fetch(this.API + '/' + list.id, options)

    let index = listArr.findIndex(l => l.id === list.id);
    listArr.splice(index,1)

    return listArr
  }


  setCompleted(list: List, listArr:List[]): List[] {
    list.completed = !list.completed

    let options = {
      method: 'PUT',
      body: JSON.stringify(list),
      headers: { "content-type": "application/json" }
    }

    fetch(this.API + '/' + list.id, options)

    let index = listArr.findIndex(l => l.id === list.id);
    listArr.splice(index,1)

    return listArr
  }

}
