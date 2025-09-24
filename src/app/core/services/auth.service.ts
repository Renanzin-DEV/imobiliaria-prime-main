import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogado: any = null;
  private apiUrl = 'http://localhost:3000/usuarios';  // URL do json-server

  constructor(private http: HttpClient) {}

  // Função de login
  login(email: string, senha: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.get<any[]>(this.apiUrl).subscribe((usuarios) => {
        const usuario = usuarios.find(u => u.email === email && u.senha === senha);
        if (usuario) {
          this.usuarioLogado = usuario;
          localStorage.setItem('usuario', JSON.stringify(usuario));
          observer.next(true);  // Login bem-sucedido
        } else {
          observer.next(false);  // Não encontrou o usuário
        }
        observer.complete();
      });
    });
  }

  // Função de logout
  logout() {
    this.usuarioLogado = null;
    localStorage.removeItem('usuario');
  }

  // Função para verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    if (!this.usuarioLogado) {
      const user = localStorage.getItem('usuario');
      this.usuarioLogado = user ? JSON.parse(user) : null;
    }
    return !!this.usuarioLogado;
  }

  // Função para obter o perfil do usuário (tipo)
  getPerfilUsuario(): string {
    return this.isAuthenticated() ? this.usuarioLogado.tipo : '';
  }

  // Função para cadastrar um novo cliente
  cadastrarCliente(nome: string, email: string, senha: string, tipo: string): Observable<any> {
    const novoCliente = { nome, email, senha, tipo };

    // Envia o novo cliente para o json-server
    return this.http.post(this.apiUrl, novoCliente);
  }
}
