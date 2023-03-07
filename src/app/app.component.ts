import { Component, DoCheck } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Angular-Crud-Login';
  ismenurequired = false;
  isadminuser = false;
  constructor(private router: Router, private service: AuthService){

  }

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if(currenturl == '/login' || currenturl == '/register'){
      this.ismenurequired = false;
    }else{
      this.ismenurequired = true;
    }
    if(this.service.GetUserrole()=== 'admin'){
      this.isadminuser = true;
    } else {
      this.isadminuser = false;
    }
    // throw new Error ('Method not implemented.');
  }
}
