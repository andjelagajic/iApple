import { Component, Input, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

 @Input() phone: Phone = {
    id: 0,
    name: '',
    image: '',
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
