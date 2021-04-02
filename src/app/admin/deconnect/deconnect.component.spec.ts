import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeconnectComponent } from './deconnect.component';

describe('DeconnectComponent', () => {
  let component: DeconnectComponent;
  let fixture: ComponentFixture<DeconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
