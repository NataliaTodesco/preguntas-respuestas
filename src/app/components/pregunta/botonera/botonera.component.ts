import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  texto = "Aceptar";
  
  constructor(public preguntaService:PreguntaService, private router: Router) { }

  ngOnInit(): void {
  }

  siguiente(){
    switch (this.texto) {
      case "Aceptar":
        this.preguntaService.pregConfirmada = true;
        if (this.preguntaService.indexPregunta == this.preguntaService.getPreguntas().length-1)
          this.texto = "Finalizar";
        else
        this.texto = "Siguiente";
        break;

      case "Siguiente":
        this.preguntaService.pregConfirmada = false;
        this.texto = "Aceptar";
        this.preguntaService.indexPregunta++;
        this.preguntaService.respuestasUsuario.push(this.preguntaService.indexRespuesta);
        this.preguntaService.deshabilitarBtn = true;
        break;
    
      case "Finalizar":
        this.preguntaService.respuestasUsuario.push(this.preguntaService.indexRespuesta);
        this.preguntaService.opcionSeleccionada = null;
        this.preguntaService.pregConfirmada = false;
        this.preguntaService.indexPregunta = 0;
        this.router.navigate(["/resultado"])
        break;
    
      default:
        break;
    }
  }
}
