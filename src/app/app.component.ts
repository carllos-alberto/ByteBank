import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;


  transferir($event) {
    console.log($event);
    this.transferencia = $event; /* transferencia está recebendo o valor ques está em event */
  }
}
