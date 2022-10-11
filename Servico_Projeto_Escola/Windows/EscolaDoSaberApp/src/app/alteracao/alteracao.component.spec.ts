import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoComponent } from './alteracao.component';

describe('AlteracaoComponent', () => {
  let component: AlteracaoComponent;
  let fixture: ComponentFixture<AlteracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
