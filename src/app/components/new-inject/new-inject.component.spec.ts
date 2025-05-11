import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInjectComponent } from './new-inject.component';

describe('NewInjectComponent', () => {
  let component: NewInjectComponent;
  let fixture: ComponentFixture<NewInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
