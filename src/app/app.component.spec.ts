import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should return buzz with 55', () => {
    expect(component.calculate(55)).toEqual('Buzz');
  });

  it('should return fizzbuzz with 105', () => {
    expect(component.calculate(105)).toEqual('FizzBuzz');
  });

  it('should return buzz with 6', () => {
    expect(component.calculate(6)).toEqual('Fizz');
  });

  it('should return fizzbuzz with 15', () => {
    expect(component.calculate(15)).toEqual('FizzBuzz');
  });

  it('should return itself with 8882', () => {
    const tesTNumber = 8882;
    expect(component.calculate(tesTNumber)).toEqual(tesTNumber.toString());
  });
});
