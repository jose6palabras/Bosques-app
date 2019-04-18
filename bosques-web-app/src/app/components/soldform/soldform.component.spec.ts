import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldformComponent } from './soldform.component';

describe('SoldformComponent', () => {
  let component: SoldformComponent;
  let fixture: ComponentFixture<SoldformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
