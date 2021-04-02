import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdetailoffreComponent } from './ajoutdetailoffre.component';

describe('AjoutdetailoffreComponent', () => {
  let component: AjoutdetailoffreComponent;
  let fixture: ComponentFixture<AjoutdetailoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutdetailoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutdetailoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
