import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private builder: FormBuilder, private toastr:ToastrService,
    private  service: AuthService, private router: Router){
      sessionStorage.clear();
  }

  userdata:any;

  loginform = this.builder.group({
    username:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.required)
  })

  proceedlogin(){
    if(this.loginform.valid){
    //   this.service.Proceedregister(this.loginform.value).subscribe(_res =>{
    //      this.toastr.success('Please contact admin for enable access','Register Success');
    //      this.router.navigate(['login']);
    //   });
    // }else{
    //   this.toastr.warning('Entre com uma data valida');
    // }

    this.service.Getbycode(this.loginform.value.username).subscribe(res=>{
      this.userdata=res;
      console.log(this.userdata);
      if(this.userdata.password === this.loginform.value.password){
        if(this.userdata.isactive){
          sessionStorage.setItem('username', this.userdata.id);
          sessionStorage.setItem('userrole', this.userdata.role);
          this.router.navigate(['']);
        }else{
          this.toastr.error('Please contact admin','In Active User')
        }
      }else{
        this.toastr.error('Invalid credentials');
      }
    });
  }
}
}
