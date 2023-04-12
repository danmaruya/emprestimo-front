import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarClientesComponent } from './atualizar-clientes.component';

describe('AtualizarClientesComponent', () => {
  let component: AtualizarClientesComponent;
  let fixture: ComponentFixture<AtualizarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
