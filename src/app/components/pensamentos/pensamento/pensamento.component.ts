import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento = {
    conteudo:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus eaque ipsam provident praesentium totam voluptate accusamus.',
    autoria: 'Silva Sauro',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}
}
