import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';   // ✅ ADD

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],   // ✅ ADD
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {

  user: any = {};

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
  }
}