import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHeadingComponent } from './text-heading.component';

describe('TextHeadingComponent', () => {
  let component: TextHeadingComponent;
  let fixture: ComponentFixture<TextHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
