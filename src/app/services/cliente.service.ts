import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ICliente } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  endpoint = 'clientes'
  api = environment.api;
  constructor(private http: HttpClient) { }

  buscarTodosClientes() {
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}`);
  }

  cadastrarCliente(cliente: ICliente) {
    return this.http.post<ICliente>(`${this.api}/${this.endpoint}`, cliente);
  }

  buscarClientePorCpf(cpf: string) {
    return this.http.get<ICliente>(`${this.api}/${this.endpoint}/${cpf}`, );
  }

  atualizarCliente(cpf: string, cliente: ICliente) {
    return this.http.put<ICliente>(`${this.api}/${this.endpoint}/${cpf}`, cliente);
  }

  deletarCliente(cpf: string) {
    return this.http.delete<ICliente>(`${this.api}/${this.endpoint}/${cpf}`);
  }
}
