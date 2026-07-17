import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';  // ✅ ADD RouterModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],   // ✅ ADD HERE
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    let user = JSON.parse(localStorage.getItem("user") || '{}');

    if (user.email === this.email && user.password === this.password) {
      alert("Login Successful");
      this.router.navigate(['/profile']);
    } else {
      alert("Invalid Credentials");
    }
  }
}