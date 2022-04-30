import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeListComponent } from './cafe-list.component';

describe('CafeDetailComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
