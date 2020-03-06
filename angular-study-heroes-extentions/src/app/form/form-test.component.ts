import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
selector: 'app-form-test-component',
templateUrl: './form-test.component.html',
styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  // 반응형 폼
  name: FormControl = new FormControl('');
  user: FormGroup = new FormGroup({
    id: new FormControl(''),
    age: new FormControl('')
  });
  // 빌더 이용
  bUser = this.fb.group({
    id: ['', Validators.required],
    age: [''],
    arr: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {

  }

  updateForm() {
    this.name.setValue('Updated value');
  }

  updateOne() {
    this.bUser.patchValue({
      age : 50000
    });
  }

  onSubmit() {
    console.log(this.user.value);
  }

  addArr() {
    this.getterArr.push(this.fb.control(''));
  }

  get getterArr() {
      return this.bUser.get('arr') as FormArray;
  }

}
