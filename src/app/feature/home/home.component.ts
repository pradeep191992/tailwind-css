import { Component, Input, OnInit } from '@angular/core';
// import Button from './button.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  @Input() label:any;
  ngOnInit(): void {
  }

}
