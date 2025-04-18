import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular, com muito foco e determinação',
    autoria: 'Jorge dev',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado com sucesso!!');
  }

  cancelar() {
    alert('Pensamento cancelado com sucesso!!');
  }
}
