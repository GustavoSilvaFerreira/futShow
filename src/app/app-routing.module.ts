import { ManagerPlayersComponent } from './manager-players/manager-players.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'manager', component: ManagerPlayersComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'todo-list', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
  //                     canActivate: [LoggedinGuard],
  //                     canLoad: [LoggedinGuard]},
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
