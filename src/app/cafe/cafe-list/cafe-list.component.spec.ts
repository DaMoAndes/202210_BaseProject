import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cafe } from '../cafe';
import { faker } from '@faker-js/faker'
import { CafeListComponent } from './cafe-list.component';
import { By } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CafeDetailComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports:[HttpClientModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    component.cafes = [
      new Cafe(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.image.imageUrl()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.image.imageUrl()
    ),
    new Cafe(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.image.imageUrl()
  ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Se verifica la tabla con tres filas más el encabaezado', () => {
    console.log(debug);

    const filas  = debug.queryAll(By.css('tbody tr'));
    const encabezado = debug.queryAll(By.css('thead tr'))
    expect(filas.length + encabezado.length).toBe((4))

  });
});
