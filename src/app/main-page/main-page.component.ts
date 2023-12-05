import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
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


