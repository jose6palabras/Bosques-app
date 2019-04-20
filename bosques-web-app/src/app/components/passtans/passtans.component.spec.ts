import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasstansComponent } from './passtans.component';

describe('PasstansComponent', () => {
  let component: PasstansComponent;
  let fixture: ComponentFixture<PasstansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasstansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasstansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
