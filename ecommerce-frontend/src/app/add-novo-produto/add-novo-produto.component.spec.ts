import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNovoProdutoComponent } from './add-novo-produto.component';

describe('AddNovoProdutoComponent', () => {
  let component: AddNovoProdutoComponent;
  let fixture: ComponentFixture<AddNovoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNovoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNovoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
