import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

paymentFrom : FormGroup = new FormGroup({
  appId:new FormControl(""),
  customerName:new FormControl(""),
serviceName:new FormControl(""),
date:new FormControl(""),
serId:new FormControl(""),
totalPrice: new FormControl("")

})


get AppId(){
  return this.paymentFrom.get("appId")
}

get CustomerName (){
  return this.paymentFrom.get("customerName")
}

get ServiceName (){
  return this.paymentFrom.get("serviceName")
}

get Date (){
  return this.paymentFrom.get("date")
}

get SerId(){
  return this.paymentFrom.get("serId")
}

get TotalPrice (){
  return this.paymentFrom.get("totalPrice")
}


  constructor() { }

  ngOnInit() {
  }

}
