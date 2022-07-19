import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

 /* Reponsável por enviar os dados para outros componentes */
@Output() aoTransferir = new EventEmitter<any>();        // Através dessa classe EventEmitter eu consigo propagar esse dado.



valor: number;
destino: number;




transferir() {
  console.log('solicitada nova transferência');
 /*  const valorEmitir = {valor: this.valor, destino: this.destino}
  this.aoTransferir.emit(valorEmitir); */
   this.aoTransferir.emit({ valor: this.valor, destino: this.destino});     //Emitindo os dados
   this.limparCampor();                                                     // Limpado os campos
}

limparCampor() {
  this.valor = 0;
  this.destino = 0;
}


}

