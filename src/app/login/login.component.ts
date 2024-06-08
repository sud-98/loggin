import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(){}

  public username = "";
  public password = "";

  onClick(){
    console.log("username", this.username);
    console.log("password", this.password);
  }
}
