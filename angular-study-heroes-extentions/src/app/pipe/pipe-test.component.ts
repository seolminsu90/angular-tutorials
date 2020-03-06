import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test-component',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {
  power: number;
  factor: number;
  constructor() {
  }

  ngOnInit() {

  }
}
