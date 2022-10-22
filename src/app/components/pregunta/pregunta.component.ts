import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPreguntas: Pregunta[];
  
  constructor(public preguntaService:PreguntaService) { }

  ngOnInit(): void {
    this.listPreguntas = this.preguntaService.getPreguntas();
  }

  respuestaSeleccionada(respuesta:Respuesta, indice: number){
    if (this.preguntaService.pregConfirmada){
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = indice;
  }

  Color(respuesta: Respuesta){
    if (this.preguntaService.opcionSeleccionada == respuesta && !this.preguntaService.pregConfirmada) {
      return "list-group-item-warning";
    }
    else if  (this.preguntaService.opcionSeleccionada == respuesta && this.preguntaService.pregConfirmada){
      if (this.preguntaService.opcionSeleccionada.esCorrecta == 1){
        return "list-group-item-success"
      } else {
        return "list-group-item-danger"
      }
    }
    else return "list-group-item-light";
  }

  iconCorrecta(respuesta: Respuesta){
    if (this.preguntaService.opcionSeleccionada == respuesta && this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSeleccionada.esCorrecta == 1){
      return true;
    }
    else return false;
  }

  iconIncorrecta(respuesta: Respuesta){
    if (this.preguntaService.opcionSeleccionada == respuesta && this.preguntaService.pregConfirmada && 
      this.preguntaService.opcionSeleccionada.esCorrecta == 0){
      return true;
    }
    else return false;
  }
}
