import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Phone } from 'src/app/models/phone';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  @Output() myOnSubmit: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(idInput: HTMLInputElement, nameInput: HTMLInputElement, priceInput: HTMLInputElement){

    const phone: Phone = {
      id: +idInput.value,
      name: nameInput.value,
      image: 'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=',
      price: +priceInput.value
    }

    this.myOnSubmit.emit(phone);
  }

}
