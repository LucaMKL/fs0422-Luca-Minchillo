import { Component } from '@angular/core';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allUsers:User[] = []

  newUser:User = new User ('','');

  addUser(){
    let usercopy = Object.assign({}, this.newUser)
    this.allUsers.push(usercopy);
  }


}
