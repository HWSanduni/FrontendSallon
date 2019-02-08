import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm : FormGroup = new FormGroup({
    cid:new FormControl(""),
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    address : new FormControl(""),
    tel : new FormControl("")
  })

  get Cid (){
    return this.customerForm.get('cid')
  }

  get FirstName (){
    return this.customerForm.get('firstName')
  }

  get LastName (){
    return this.customerForm.get('lastName')
  }

  get Address (){
    return this.customerForm.get('address')
  }

  get Tel (){
    return this.customerForm.get('tel')
  }

  constructor() { }

  ngOnInit() {
  }

  save(){
    alert(this.FirstName.value)
    alert(this.LastName.value)
    alert(this.Address.value)
    alert(this.Tel.value)
  }

  
}
