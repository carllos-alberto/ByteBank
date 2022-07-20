import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Transferencia } from "../models/transferencia.models";
import { TransferenciasService } from "../services/transferencias.service";

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


constructor(private service: TransferenciasService){

}


transferir() {
  console.log('solicitada nova transferência');
 const valorEmitir: Transferencia  = {valor: this.valor, destino: this.destino}

this.service.adicionar(valorEmitir).subscribe(resultado => {
  console.log(resultado);
  this.limparCampor();
},
(error) => console.error(error)
)

}

limparCampor() {
  this.valor = 0;
  this.destino = 0;
}


}

