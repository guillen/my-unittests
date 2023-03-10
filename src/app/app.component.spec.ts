import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app:AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('Sumar dos números', () => {
    //Arrange (implicit in beforeEach)
    //Act and Assert
    expect(app.sum(10, 30)).toBe(40);
  });

  xit('Ejemplos de validaciones', () => {
    expect(true).toBeTrue();
    expect(1).toBeTruthy();
    expect(false).toBeFalse();
    expect(0).toBeFalsy();
    expect(null).toBeNull();
    let obj: {a:number,b?:number} = {
      a: 1,
    }
    expect(obj.a).toBeDefined();
    expect(obj.b).toBeUndefined();
    expect(10).toBeGreaterThan(5);
    expect(10).toBeGreaterThanOrEqual(10);
    expect(10).toBeLessThan(20);
    expect(10).toBeLessThanOrEqual(10);
  });
});
