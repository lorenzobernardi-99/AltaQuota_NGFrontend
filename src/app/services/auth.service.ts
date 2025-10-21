import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs'; // 'of' creates a fake Observable

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    // Check if a token exists in local storage
    return !!localStorage.getItem('auth_token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  // MOCK LOGIN
  login(username: string, password: string): Observable<boolean> {
    // In a real app, this would be an http.post()
    // For now, we just pretend.
    console.log(`Mock login attempt for: ${username}`);
    
    // Fake a successful login
    localStorage.setItem('auth_token', 'my-fake-jwt-token');
    localStorage.setItem('username', username);

    // Return a fake observable that completes
    return of(true).pipe(
      tap(() => this.router.navigate(['/dashboard']))
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}