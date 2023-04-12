import { Component } from '@angular/core';
import { IconOptions } from '@angular/material/icon';
import { ICliente } from 'src/app/interfaces/clientes';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  cliente: ICliente[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.buscarTodosClientes().subscribe((result: ICliente[]) => {
      this.cliente = result;
    });
  }

  deletar(cliente: ICliente) {
    Swal.fire({
      title: 'Exclusão de cliente do sistema',
      text: 'Deseja excluir o cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deletarCliente(cliente.cpf)
        .subscribe(
          () => {
          this.clienteService.buscarTodosClientes().subscribe((result: ICliente[]) => {
            this.cliente = result;
          });
          Swal.fire({
            title: 'Exclusão realizada',
            text: 'Cliente excluido com sucesso',
            icon: 'success'
          });
        }, (error) => {
          Swal.fire({
            title: 'Erro ao excluir',
            text: 'Ocorreu um erro ao excluir o cliente',
            icon: 'error'
          });
        });
        }
      });
  }

}


