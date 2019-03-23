import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkcomponentComponent } from './parkcomponent/parkcomponent.component';
import { UnparkcomponentComponent} from './unparkcomponent/unparkcomponent.component';
import { ReportcomponentComponent } from './reportcomponent/reportcomponent.component';
const routes: Routes = [
  {path: 'park' , component:ParkcomponentComponent},
  {path: 'unpark' , component:UnparkcomponentComponent},
  {path: 'park_report' , component:ReportcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
