import { Routes } from "@angular/router";

export const APP_ROUTES: Routes=[
    {path: '', redirectTo: '/testeapi', pathMatch: 'full'},
    {path:'paramestab', loadComponent:()=> import('../app/components/paramestab/paramestab.component').then(c=>c.ParamestabComponent)},
    {path:'monitor', loadComponent:()=> import('../app/components/monitor-processos/monitor-processos.component').then(c=>c.MonitorProcessosComponent)},
    {path:'testeapi', loadComponent:()=> import('../app/components/testeapi/testeapi.component').then(c=>c.TesteapiComponent)},
    {path:'precosprazos', loadComponent:()=> import('../app/components/precosprazos/precosprazos.component').then(c=>c.PrecosprazosComponent)},
        
    
  
];
