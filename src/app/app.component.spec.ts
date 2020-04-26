import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormControl} from "@angular/forms";

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

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('bizzfuzz app idds running!');
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

  it('should return defined multiply of 5 (called fünfer) with 20', () => {
    const definedValueOf5 = 'fünfer';
    const definedValueOf3 = 'dreier';
    const definedValueOfBoth = 'beides';
    const randomNumber = 20;
    component.bizzFuzzForm.setValue({multipliesOf3: new FormControl(definedValueOf5)});


    expect(component.calculate(randomNumber)).toEqual(definedValue);
  });
});
