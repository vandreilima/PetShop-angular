import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LojaComponent } from './pages/loja/loja.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ServicesComponent } from './pages/services/services.component';

const APP_ROTAS: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administração', component: MenuComponent },
  { path: 'service', component: ServicesComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS)
