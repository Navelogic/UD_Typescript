import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoListaComponent } from './botao-lista.component';

describe('BotaoListaComponent', () => {
  let component: BotaoListaComponent;
  let fixture: ComponentFixture<BotaoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
