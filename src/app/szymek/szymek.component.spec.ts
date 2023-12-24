import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzymekComponent } from './szymek.component';

describe('SzymekComponent', () => {
  let component: SzymekComponent;
  let fixture: ComponentFixture<SzymekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzymekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzymekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
