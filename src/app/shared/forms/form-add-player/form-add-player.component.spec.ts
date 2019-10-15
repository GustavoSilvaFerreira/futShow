import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPlayerComponent } from './form-add-player.component';

describe('FormAddPlayerComponent', () => {
  let component: FormAddPlayerComponent;
  let fixture: ComponentFixture<FormAddPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
