import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box-demo',
  templateUrl: './check-box-demo.component.html',
  styleUrls: ['./check-box-demo.component.sass']
})
export class CheckBoxDemoComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  
  constructor() { }

  ngOnInit() {
  }

}
