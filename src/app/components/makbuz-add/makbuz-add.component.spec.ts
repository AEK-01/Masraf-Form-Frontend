import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakbuzAddComponent } from './makbuz-add.component';

describe('MakbuzAddComponent', () => {
  let component: MakbuzAddComponent;
  let fixture: ComponentFixture<MakbuzAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakbuzAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakbuzAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
