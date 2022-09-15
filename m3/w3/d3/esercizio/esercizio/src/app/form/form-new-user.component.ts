import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-new-user',
  template: `
  <form class="container">
      <input type="text" name="name" placeholder="Nome" class="form-control">
      <input type="text" name="lastname" placeholder="Cognome" class="form-control">
      <input type="email" name="email" placeholder="Email" class="form-control">
      <button class="btn btn-primary">Salva</button>
  </form>
  `,
  styles: [
  ]
})
export class FormNewUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
