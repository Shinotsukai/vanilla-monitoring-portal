import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  email:string='';
  password:string='';

  footerConfig:any[] = [
    {title:'login', style:'has-background-danger has-text-white is-size-3'},

  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(e:any){
    console.log(e)
    this.router.navigate(['portal'])
  }

}
