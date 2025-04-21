import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, necessitatibus assumenda, saepe beatae accusantium sint molestias minus sit quod itaque nemo vero fuga praesentium voluptatibus error dignissimos commodi, adipisci ex. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, necessitatibus assumenda, saepe beatae accusantium sint molestias minus sit quod itaque nemo vero fuga praesentium voluptatibus error dignissimos commodi, adipisci ex.()',
      autoria: 'Javascripton Bezerra',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
