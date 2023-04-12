import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/clientes';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css'],
})
export class CadastrarClientesComponent {
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  clienteForm = new FormGroup({
    cpf: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    endereco: new FormGroup({
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      cep: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    }),
    rendimentoMensal: new FormControl(0, Validators.required),
  });

  clienteCpf = '';

  ngOnInit() {
    this.clienteCpf = this.route.snapshot.paramMap.get('cpf')!;
    if (this.clienteCpf) {
      this.clienteService.buscarClientePorCpf(this.clienteCpf!).subscribe(
        (cliente: ICliente) => {
          this.clienteForm.setValue({
            cpf: cliente.cpf,
            nome: cliente.nome,
            telefone: cliente.telefone,
            endereco: {
              rua: cliente.endereco.rua,
              numero: cliente.endereco.numero,
              cep: cliente.endereco.cep,
            },
            rendimentoMensal: cliente.rendimentoMensal,
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Erro 404',
            text: 'Cliente não localizado',
          });
        }
      );
    }
  }

  cadastrar() {
    const cliente: ICliente = this.clienteForm.value as ICliente;
      this.clienteService.cadastrarCliente(cliente).subscribe(
        (result) => {
          Swal.fire(
            'Cliente cadastrado',
            'Cliente cadastrado com sucesso.',
            'success'
          );
          this.router.navigate(['/clientes']);
        },
        (error) => {
          if (error.error.errors[0]) {
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: error.error.errors[0].defaultMessage,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: error.error.message,
            });
          }
        }
      );
    }
  }

