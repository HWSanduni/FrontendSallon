import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  appoinmentFrom:FormGroup = new FormGroup({
    custId :new FormControl(""),
    customerName:new FormControl(""),
    serviceName : new FormControl(""),
    date :new FormControl(""),
    time:new FormControl(""),
    price:new FormControl("")

  })
get CustId(){
    return this.appoinmentFrom.get("custId")
}

get CustomerName (){
  return this.appoinmentFrom.get("customerName")
}
get ServiceName (){
  return this.appoinmentFrom.get("serviceName")
}

get Date (){
  return this.appoinmentFrom.get("date")
}

get Time (){
  return this.appoinmentFrom.get("time")
}

get Price (){
  return this.appoinmentFrom.get("price")
}
  constructor() { }

  ngOnInit() {
  }

  save(){
    alert(this.CustId.value)
    alert(this.CustomerName.value)
    alert(this.Date.value)
    alert(this.Price.value)
    alert(this.ServiceName.value)
    alert(this.Time.value)
  }

}
