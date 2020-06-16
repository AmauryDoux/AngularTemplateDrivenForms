import { Component, OnInit } from '@angular/core';
export class User {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
}

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  model: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // form submitted
    
    console.log(this.model);

  }

}
