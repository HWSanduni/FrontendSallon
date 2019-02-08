import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../service/auth-service/auth.service';

@Component({
  selector: 'app-dashborde-layout',
  templateUrl: './dashborde-layout.component.html',
  styleUrls: ['./dashborde-layout.component.css']
})
export class DashbordeLayoutComponent implements OnInit {
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }


}
