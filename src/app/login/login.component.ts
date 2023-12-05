import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private spinner: NgxSpinnerService

  ){}

  ngOnInit():void{
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()

    }, 1000);
  }


}
