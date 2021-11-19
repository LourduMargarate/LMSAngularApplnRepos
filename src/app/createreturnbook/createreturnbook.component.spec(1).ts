import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereturnbookComponent } from './createreturnbook.component';

describe('CreatereturnbookComponent', () => {
  let component: CreatereturnbookComponent;
  let fixture: ComponentFixture<CreatereturnbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereturnbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatereturnbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
