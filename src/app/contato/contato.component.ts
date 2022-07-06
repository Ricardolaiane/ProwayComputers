import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
    ]],
    assunto:["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone:["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email:["", [
      Validators.email,
      Validators.required
    ]],
    mensagem:["", [
      Validators.minLength,
      Validators.required
    ]]
  });
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
