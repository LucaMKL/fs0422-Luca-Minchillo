export class User {
  id!:string;
  name:string;
  lastname:string;
  constructor(name:string, lastname:string){
    this.name = name
    this.lastname = lastname
  }
}
