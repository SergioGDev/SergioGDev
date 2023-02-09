import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajeFormulario, RespuestaFormspree } from '../../interfaces/links.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }
  
  ngOnInit(): void {
  }

  pathImagen: string = "../../../assets/img/fondo-contacto.jpg";
  titulo: string = "Contacto";

  /* FORMULARIO */
  formularioContacto: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required ]],
    email: [ , [ Validators.required ]],
    asunto: [ , [ Validators.required ]],
    mensaje: [ , [ Validators.required ]],
  });

  enviado: boolean = false;
  errorEnvio: boolean = false;
  enviando: boolean = false;

  campoEsValido(campo: string) {
    return this.formularioContacto.controls[campo].errors
      && this.formularioContacto.controls[campo].touched;
  }

  enviar(): void {
    if (this.formularioContacto.invalid) {
      this.formularioContacto.markAllAsTouched();
      return;
    }

    const mensaje: MensajeFormulario = this.formularioContacto.value;
    this.enviando = true;
    this.dataService.enviarFormularioContacto(mensaje)
      .subscribe(
        ({type, msg}) => {
            if (type === 'ok') {
              this.enviado = true;
              this.errorEnvio = false;
              this.enviando = false;
              
              // Reseteamos el formulario
              this.formularioContacto.reset();
            } else {
              this.enviado = false;
              this.errorEnvio = true;
              this.enviando = false;
            }
          },
          err => {
            this.enviado = false;
            this.errorEnvio = true;
            this.enviando = false;
        }
      );

    
  }

}
