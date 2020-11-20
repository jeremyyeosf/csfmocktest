import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  orderForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.orderForm = fb.group({
      'name': [''],
      'contactNo': [''],
      'gender': [''],
      'dob': [''],
      'orderDate': [''],
      'orderType': [''],
      'orderUnit': [''],
      'qrCodeLink': [''],
      'bitcoinAddress': [''],
      'totalPrice': ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log('form values: ', value)
  }

}
