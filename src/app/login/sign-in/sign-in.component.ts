import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any;
  isLoading: boolean;
  error: string;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.model = {
      email: '',
      password: ''
    };
    this.isLoading = false;
    this.error = '';
  }

  onClick(e) {
    e.preventDefault();
    const { email, password } = this.model;
    this.isLoading = true;

    this.authService.login(email, password).subscribe((response: User)=> {
      this.isLoading = false;
      if (response.token) {
        this.router.navigate(['/admin']);
        localStorage.setItem('token', response.token);
      } else {
        this.error = 'Usuario y/o contraseña son erroneas.';
        this.hideError();
      }
    });
  }

  hideError() {
    setTimeout(() => {
      this.error = '';
    }, 3000);
  }

}
