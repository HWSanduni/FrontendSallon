import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-service/auth.gurad';

const routes: Routes = [
 {
    path : "dash",
    loadChildren : "src/app/view/layout/dashborde-layout/dashborde-layout.module#DashbordeLayoutModule",
    canActivate: [AuthGuard]
  },
  {
    path : "login",
    loadChildren : "src/app/view/layout/login-layout/login-layout.module#LoginLayoutModule"
  },
  { path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
