import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastrarClientesComponent as CadastrarClientesComponent } from './pages/cadastrar-clientes/cadastrar-clientes.component';
import { AtualizarClientesComponent } from './pages/atualizar-clientes/atualizar-clientes.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'clientes/cadastrar', component: CadastrarClientesComponent
  },
  {
    path: 'clientes/atualizar/:cpf', component: AtualizarClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
