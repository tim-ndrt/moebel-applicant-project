import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result: string[];
  bizzFuzzForm = new FormGroup({
    randNumber: new FormControl('', Validators.required),
    multipliesOf3: new FormControl('Fizz', Validators.required),
    multipliesOf5: new FormControl('Buzz', Validators.required),
    multipliesOfBoth: new FormControl('FizzBuzz', Validators.required),
  });

  static checkForMultiplicity(value: number, multiplicand: number): boolean {
    return value % multiplicand === 0;
  }

  ngOnInit(): void {
    this.onChanges();
  }

  calculate(inputNumber: number): string {
    const multiPliesOf3 = this.bizzFuzzForm.value.multipliesOf3;
    const multiPliesOf5 = this.bizzFuzzForm.value.multipliesOf5;
    const multiPliesOfBoth = this.bizzFuzzForm.value.multipliesOfBoth;

    if (AppComponent.checkForMultiplicity(inputNumber, 5)
      && AppComponent.checkForMultiplicity(inputNumber, 3)) {
      return multiPliesOfBoth;
    }

    if (AppComponent.checkForMultiplicity(inputNumber, 3)) {
      return multiPliesOf3;
    }
    if (AppComponent.checkForMultiplicity(inputNumber, 5)) {
      return multiPliesOf5;
    }

    return inputNumber.toString();
  }

  private onChanges(): void {
    this.bizzFuzzForm.valueChanges.subscribe(val => {
      if (this.bizzFuzzForm.valid) {
        let i: number;
        const resultArray = [];
        for (i = 1; i <= val.randNumber; i++) {
          resultArray.push(this.calculate(i));
        }
        this.result = resultArray;
      }
    });
  }
}
