import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE!
import { RouterModule } from '@angular/router';
import { ImoveisService } from 'src/app/core/services/imoveis.service';

@Component({
  selector: 'app-dashboard-imoveis',
  standalone: true,
  imports: [
    CommonModule,      
    RouterModule    
  ],
  templateUrl: './dashboard-imoveis.component.html',
  styleUrls: ['./dashboard-imoveis.component.scss']
})
export class DashboardImoveisComponent implements OnInit {
  imoveis: any[] = [];

  constructor(private imovelService: ImoveisService) { }

  ngOnInit(): void {
    this.carregarImoveis();
  }

  carregarImoveis() {
    this.imovelService.getImoveis().subscribe(data => {
      this.imoveis = data;
    });
  }

  novoImovel() {
    alert('Função de Novo Imóvel ainda não implementada.');
    // Aqui você pode redirecionar para um formulário de cadastro
    // Ex: this.router.navigate(['/corretor/imovel/novo']);
  }

  editarImovel(imovel: any) {
    alert(`Editar imóvel: ${imovel.titulo}`);
    // Implemente redirecionamento ou modal de edição
  }

  excluirImovel(id: number) {
    if (confirm('Tem certeza que deseja excluir este imóvel?')) {
      this.imovelService.deleteImovel(id).subscribe(() => {
        this.carregarImoveis(); // Recarrega a lista
        alert('Imóvel excluído com sucesso!');
      });
    }
  }
}