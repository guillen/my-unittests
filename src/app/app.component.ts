import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mis Primeras Pruebas Unitarias';

  sum(num1:number, num2:number) : number {
    return num1 + num2;
  }
}
