import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '' ,redirectTo: '/app', pathMatch: 'full'},
  {path: 'app', component : LoginComponent},
 // {path: 'app/dashboard', component : DashboardComponent},
  {path:'app/dashboard',loadChildren:()=>import(`./dashboard/dashboard.module`).then(m=>m.DashboardModule)},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
