import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-imovel',
  templateUrl: './card-imovel.component.html',
  styleUrls: ['./card-imovel.component.scss']
})
export class CardImovelComponent {
  // 👇 INPUTS — obrigatórios pro template funcionar
  @Input() imovel: any = {
    id: 0,
    titulo: '',
    tipo: '',
    cidade: '',
    preco: 0,
    descricao: '',
    imagemUrl: 'https://via.placeholder.com/300x200?text=Sem+Imagem'
  };

  @Input() mostrarBotaoInteresse = false;

  // 👇 OUTPUTS — pra emitir eventos pro componente pai
  @Output() aoVerDetalhes = new EventEmitter<number>();
  @Output() aoMarcarInteresse = new EventEmitter<number>();

  // 👇 MÉTODOS CHAMADOS PELO TEMPLATE
  verDetalhes() {
    this.aoVerDetalhes.emit(this.imovel.id);
  }

  marcarInteresse() {
    this.aoMarcarInteresse.emit(this.imovel.id);
  }
}