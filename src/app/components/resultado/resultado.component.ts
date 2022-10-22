import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  listPregunta: Pregunta[];
  respuestaUsuario:any[];

  constructor(private preguntaService:PreguntaService, private router:Router) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
    this.respuestaUsuario = this.preguntaService.respuestasUsuario;
  }

  volver(){
    this.preguntaService.respuestasUsuario = [];
    this.router.navigate(["/"]);
  }

  iconCorrecta(respuesta: Respuesta){
    if (this.preguntaService.opcionSeleccionada == respuesta && 
      this.preguntaService.opcionSeleccionada.esCorrecta == 1){
      return true;
    }
    else return false;
  }

  iconIncorrecta(respuesta: Respuesta){
    if (this.preguntaService.opcionSeleccionada == respuesta && 
      this.preguntaService.opcionSeleccionada.esCorrecta == 0){
      return true;
    }
    else return false;
  }
}
