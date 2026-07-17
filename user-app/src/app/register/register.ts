import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';   // ✅ ADD THIS

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],   // ✅ ADD HERE
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  register() {
    localStorage.setItem("user", JSON.stringify(this.user));
    alert("Registered Successfully!");
  }
}