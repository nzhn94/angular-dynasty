import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineTextComponent } from './outline-text.component';

describe('OutlineTextComponent', () => {
  let component: OutlineTextComponent;
  let fixture: ComponentFixture<OutlineTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlineTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
