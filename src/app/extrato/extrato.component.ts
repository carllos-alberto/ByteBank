import { TransferenciasService } from './../services/transferencias.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];


  constructor(private service: TransferenciasService ) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) =>{
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
