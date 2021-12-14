import { Component } from '@angular/core';
import { Phone } from './models/phone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  phones: Phone[] = [
    {id: 1, name: 'Telefon 1', image: 'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=', price: 230},
    {id: 2, name: 'Telefon 2', image: 'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=', price: 150},
    {id: 3, name: 'Telefon 3', image: 'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=', price: 99}
  ]

  addPhone(phone: Phone){
    this.phones.push(phone);
  }
}
