import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LojaComponent } from './pages/loja/loja.component';
import { LoginComponent } from './pages/login/login.component';
import { GridTresColunasComponent } from './components/grid-tres-colunas/grid-tres-colunas.component';
import { GirdCardComponent } from './components/gird-card/gird-card.component';
import { FiltroGridComponent } from './components/filtro-grid/filtro-grid.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { CadProdutoComponent } from './components/cad-produto/cad-produto.component';
import { CadFiltroComponent } from './components/cad-filtro/cad-filtro.component';
import { CadFornecedorComponent } from './components/cad-fornecedor/cad-fornecedor.component';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './pages/services/services.component';
import { IconCartComponent } from './components/icon-cart/icon-cart.component';
import { ModalCartComponent } from './components/modal-cart/modal-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LojaComponent,
    LoginComponent,
    GridTresColunasComponent,
    GirdCardComponent,
    FiltroGridComponent,
    MenuComponent,
    MenuHeaderComponent,
    CadProdutoComponent,
    CadFiltroComponent,
    CadFornecedorComponent,
    ServicesComponent,
    IconCartComponent,
    ModalCartComponent,
    CartItemComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    SidebarModule.forRoot(),
    NgbPaginationModule, NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
