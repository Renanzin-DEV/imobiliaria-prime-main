import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  // 👈 SEM standalone
  styleUrls: ['./login.component.scss']   // opcional
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.email, this.senha)) {
      const perfil = this.authService.getPerfilUsuario();
      if (perfil === 'corretor') {
        this.router.navigate(['/corretor/dashboard']);
      } else if (perfil === 'cliente') {
        this.router.navigate(['/cliente/meus-interesses']);
      }
    } else {
      alert('Login inválido!');
    }
  }
}