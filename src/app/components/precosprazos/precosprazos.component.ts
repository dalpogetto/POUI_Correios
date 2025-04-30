import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoIconModule, PoLoadingModule, PoTableModule, PoTooltipModule, PoWidgetModule } from '@po-ui/ng-components';
import { CorreioService } from '../../services/correio.service';
import { DninputComponent } from "../dninput/dninput.component";

@Component({
  selector: 'app-precosprazos',
  standalone: true,
  imports: [NgIf, PoLoadingModule, PoFieldModule, FormsModule, PoIconModule, PoButtonModule, PoTableModule, NgClass, PoTooltipModule, DninputComponent,PoWidgetModule ],
  templateUrl: './precosprazos.component.html',
  styleUrl: './precosprazos.component.css'
})
export class PrecosprazosComponent {

  private srvCorreios = inject(CorreioService)
  
    loadTela=false;
    alturaGrid:number=window.innerHeight - 450
    lista!:any[]
    listaObjetos=''
    novalista!:any[]
    cToken=''
   
    onListar() {
      this.lista=[]
      this.loadTela=true;
      let param={cepOrigem: "05347901",
                 cepDestino: "13402376",
                 itens: [
                            {
                              itCodigo: "ProdutoA",
                              altura: 10,
                              largura: 10,
                              comprimento: 10,
                              peso: 10
                            }
  ]}
      this.srvCorreios.CalculoPrecoPrazo(param,this.cToken).subscribe({
        next: (response: any) => {
           this.lista=response.calculo;
           console.log(response)
           this.loadTela=false;
        },
        error: (e) => {
          console.log(e)
          this.loadTela=false;
          return;
        }
        
        
      });
    }
}
