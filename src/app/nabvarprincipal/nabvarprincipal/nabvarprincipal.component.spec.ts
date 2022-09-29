import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarprincipalComponent } from './nabvarprincipal.component';

describe('NabvarprincipalComponent', () => {
  let component: NabvarprincipalComponent;
  let fixture: ComponentFixture<NabvarprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvarprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
