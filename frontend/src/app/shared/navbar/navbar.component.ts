import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
})
export class NavbarComponent implements OnInit {
  userName?: string;
  constructor(
    public authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.userService.getUserProfile().subscribe((userProfile) => {
        this.userName = userProfile.name;
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
