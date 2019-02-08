import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-saloonservice',
  templateUrl: './saloonservice.component.html',
  styleUrls: ['./saloonservice.component.css']
})
export class SaloonserviceComponent implements OnInit {

  serviceFrom : FormGroup = new FormGroup({
    serId: new FormControl(""),
    serviceName : new FormControl(""),
    time:new FormControl(""),
    price : new FormControl("")
  })

get SerId(){
  return this.serviceFrom.get("serId")
}

get ServiceName (){
  return this.serviceFrom.get("serviceName")
}

get Time (){
  return this.serviceFrom.get("time")
}

get Price (){
  return this.serviceFrom.get("price")
}

  constructor() { }

  ngOnInit() {
  }

}
