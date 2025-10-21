import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // These will be linked to the form
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.error = 'Username and password are required';
      return;
    }
    
    // Call the mock service
    this.authService.login(this.username, this.password).subscribe({
      next: (success) => {
        if (!success) {
          this.error = 'Login failed (mock)';
        }
      },
      error: (err) => {
        this.error = 'An error occurred';
        console.error(err);
      }
    });
  }
}