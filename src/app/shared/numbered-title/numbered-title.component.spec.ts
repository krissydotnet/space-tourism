import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberedTitleComponent } from './numbered-title.component';

describe('NumberedTitleComponent', () => {
  let component: NumberedTitleComponent;
  let fixture: ComponentFixture<NumberedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberedTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
