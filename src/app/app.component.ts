import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrondEndAppTareas';

  constructor(private router:Router){}

  listartarea(){
    this.router.navigate(["listar"]);
  }

  nuevatarea(){
    this.router.navigate(["add"]);
  }

}
