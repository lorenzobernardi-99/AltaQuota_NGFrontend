import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }

  logout(): void {
    this.authService.logout();
  }
}