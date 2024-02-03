import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListtasksComponent } from './listtasks/listtasks.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AddtaskComponent } from './addtask/addtask.component';

const routes: Routes = [
 // {path:"login",redirectTo:'login',pathMatch:'full'},
  { path: '', component:LoginComponent },
  { path: 'addtask/:idofproject', component:AddtaskComponent },
  { path: 'tasks', component:ListtasksComponent },
  {path: 'project', component:ListprojectComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
