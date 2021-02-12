import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTextComponent } from './description-text.component';

describe('DescriptionTextComponent', () => {
  let component: DescriptionTextComponent;
  let fixture: ComponentFixture<DescriptionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
