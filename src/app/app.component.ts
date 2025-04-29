import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';

import {
  PoMenuComponent,
  PoMenuItem,
  PoMenuModule,
  PoToolbarModule,
  PoPageModule,
  PoTagModule,
  PoButtonComponent,
  PoButtonModule,
} from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { TotvsService } from './services/totvs-service.service';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { PoButtonBaseComponent } from '@po-ui/ng-components/lib/components/po-button/po-button-base.component';
import { TotvsService46 } from './services/totvs-service-46.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [PoMenuModule, NgIf, PoToolbarModule, PoPageModule, RouterOutlet, PoTagModule, PoButtonModule],
})
export class AppComponent {
  private srvTotvs = inject(TotvsService);
  private srvTotvs46 = inject(TotvsService46);
  private cdRef = inject(ChangeDetectorRef);

  @ViewChild('menuLateral', { static: true }) menuLateral:
    | PoMenuComponent
    | undefined;

  //--------- Opcoes de Menu
  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Rastro',
      icon: 'bi bi-display',
      link: '/testeapi',
      shortLabel: 'Home',
    },
 
    {
      label: 'Cálculo Preços/Prazo',
      icon: 'bi bi-calculator',
      link: '/precosprazos',
      shortLabel: 'Cálculo',
    },
    {
      label: 'Emissao Objeto',
      icon: 'bi bi-upc-scan',
      link: '/monitor',
      shortLabel: 'Monitor Processos',
    },
  ];

  //------ Label de menu principal
  tecnicoInfo!: string;
  estabInfo!: string;
  processoInfo!: string;
  processoSituacao!: string;
  tituloTela!: string;
  dashboard: boolean = false;
  abrirMenu: boolean = false;
  abrirSeletor: boolean = false;
  teste: number = 8;

  private sub!: Subscription;

  AbrirProgramaTotvs(programa: string) {
    let params: any = { program: programa, params: '' };
    this.srvTotvs.AbrirProgramaTotvs(params).subscribe({
      next: (response: any) => {},
      error: (e) => {},
    });
  }

  DesbloquearProcesso(){
   let params:any={codEstabel: this.estabInfo.split(' ')[0], nrProcess: this.processoInfo}
   console.log(params)
   this.srvTotvs46.DestravarProcesso(params).subscribe({
    next: (response: any) => {}})
    
   this.srvTotvs46.Deslogar()
  }

  ngOnInit(): void {
    this.estabInfo = '';
    this.sub = this.srvTotvs.LerParametros().subscribe({
      next: (response: any) => {
        this.estabInfo = response.estabInfo ?? this.estabInfo;
        this.tecnicoInfo = response.tecInfo ?? this.tecnicoInfo;
        this.processoInfo = response.processoInfo ?? this.processoInfo;
        this.processoSituacao =
          response.processoSituacao ?? this.processoSituacao;
        this.tituloTela = response.tituloTela ?? this.tituloTela;
        this.dashboard = response.dashboard ?? this.dashboard;
        this.abrirMenu = response.abrirMenu ?? true;

        if (this.abrirMenu) this.menuLateral?.expand();
        else this.menuLateral?.collapse();

        this.cdRef.detectChanges();
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }
}
