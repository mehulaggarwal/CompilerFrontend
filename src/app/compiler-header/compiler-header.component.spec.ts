import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerHeaderComponent } from './compiler-header.component';

describe('CompilerHeaderComponent', () => {
  let component: CompilerHeaderComponent;
  let fixture: ComponentFixture<CompilerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompilerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
