import { Component, OnInit } from '@angular/core';

export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  model: Order = new Order();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // form submitted
    console.log(this.model);

  }
}
