import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  userEmail!: string;
  userPassword!: string;
  message!: string;

  constructor(private authService: AuthService,
              private router: Router) {
   }

  ngOnInit(): void {
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.validate(this.userEmail, this.userPassword).then((response) => {
      this.authService.setUserInfo({'user': response['user']})
      this.router.navigate(['home'])
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.

        // Set our navigation extras object
        // that passes on our global query params and fragment


        // Redirect the user

    });
  }

  logout() {
    this.authService.logout();

  }
}
