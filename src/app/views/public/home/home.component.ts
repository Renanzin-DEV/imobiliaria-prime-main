import { Component, OnInit } from '@angular/core';
import { ImoveisService } from '../../../core/services/imoveis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imoveisDestaque: any[] = [];

  constructor(private imoveisService: ImoveisService, private router: Router) {}

  ngOnInit(): void {
    this.carregarImoveisDestaque();
  }

  carregarImoveisDestaque() {
    this.imoveisService.getImoveis().subscribe({
      next: (data) => {
        this.imoveisDestaque = data.slice(0, 3);
      },
      error: (err) => {
        console.error('Erro ao carregar imóveis:', err);
        this.imoveisDestaque = [];
      },
    });
  }

  navegarParaDetalhes(id: number) {
    console.log('Navegar para detalhes do imóvel ID:', id);
    // this.router.navigate(['/imovel', id]); // descomente quando criar a rota
  }

  registrarInteresse(id: number) {
    console.log('Registrar interesse no imóvel ID:', id);
    alert(`Interesse registrado no imóvel ${id}`);
    // Aqui você chamaria o serviço depois
  }
}
