import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSubHeadingComponent } from './text-sub-heading.component';

describe('TextSubHeadingComponent', () => {
  let component: TextSubHeadingComponent;
  let fixture: ComponentFixture<TextSubHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSubHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSubHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
