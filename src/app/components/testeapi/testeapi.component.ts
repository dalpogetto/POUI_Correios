import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoIconModule, PoLoadingModule, PoTableModule, PoTooltipModule, PoWidgetModule } from '@po-ui/ng-components';
import { CorreioService } from '../../services/correio.service';
import { DninputComponent } from "../dninput/dninput.component";
import { RastroResponse } from '../../models/rastroresponse';

@Component({
  selector: 'app-testeapi',
  standalone: true,
  imports: [NgIf, PoLoadingModule, PoFieldModule, FormsModule, PoIconModule, PoButtonModule, PoTableModule, NgClass, PoTooltipModule, DninputComponent,PoWidgetModule ],
  templateUrl: './testeapi.component.html',
  styleUrl: './testeapi.component.css'
})
export class TesteapiComponent {

  private srvCorreios = inject(CorreioService)

  loadTela=false;
  alturaGrid:number=window.innerHeight - 450
  lista!:any[]
  listaObjetos=''
  registro!: RastroResponse

onListar() {
  this.loadTela=true;
  let param=this.listaObjetos
  this.srvCorreios.RastroObjeto(param).subscribe({
    next: (response: any) => {
       this.registro = response as RastroResponse
       this.lista=this.registro.objetos[0].eventos
       this.loadTela=false;
    },
    error: (e) => {
      console.log("Erro", e)
      this.loadTela=false;
      return;
    }
    
    
  });



}

  

}
