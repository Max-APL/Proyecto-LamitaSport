import { Routes } from '@angular/router';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PedidosComponent} from "./pedidos/pedidos.component";
import { ContactosComponent} from "./contactos/contactos.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'barra-lateral', component: BarraLateralComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'contactos', component: ContactosComponent }
];
