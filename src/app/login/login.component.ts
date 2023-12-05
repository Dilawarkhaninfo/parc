import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private spinner: NgxSpinnerService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

  ngOnInit(): void {
    console.log('LoginComponent ngOnInit');
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  onSubmit() {
    // Validate reCAPTCHA
    this.recaptchaV3Service.execute('6Lcd-SYpAAAAAFQcc9j4fHtNlMKBwHzO7bLJPBYB')
      .subscribe((token) => {
        // Use the token for verification or proceed with login
        console.log('reCAPTCHA Token:', token);
        // Add your login logic here
      });
  }

  onResolved(event: any) {
    // Handle reCAPTCHA resolved event if needed
  }


}
