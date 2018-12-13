import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DalamComponent } from './dalam/dalam.component';
import { DalamStartComponent } from './dalam/dalam-start/dalam-start.component';
import { DalamDetailComponent } from './dalam/dalam-detail/dalam-detail.component';
import { DalamEditComponent } from './dalam/dalam-edit/dalam-edit.component';

import { LuarComponent } from './luar/luar.component';
import { LuarStartComponent } from './luar/luar-start/luar-start.component';
import { LuarDetailComponent } from './luar/luar-detail/luar-detail.component';
import { LuarEditComponent } from './luar/luar-edit/luar-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dalams', pathMatch: 'full'},
  {path: 'dalams', component: DalamComponent, children: [
    {path: '', component: DalamStartComponent},
    {path: 'new', component: DalamEditComponent},
    {path: ':id', component: DalamDetailComponent},
    {path: ':id/edit', component: DalamEditComponent},

  ]},
  {path: 'luar', component: LuarComponent, children: [
    {path: '', component: LuarStartComponent},
    {path: 'new', component: LuarEditComponent},
    {path: ':id', component: LuarDetailComponent},
    {path: ':id/edit', component: LuarEditComponent},

  ]}
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})

export class AppRoutingModule {}
