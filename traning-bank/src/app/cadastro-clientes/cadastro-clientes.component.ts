import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  conversao;
  valoresForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    
  }
  cadastro(){
    console.log(this.formCadastro.value);
    this.conversao = JSON.stringify(this.formCadastro.value);
    localStorage.setItem('cadastro', this.conversao);

  }

}
