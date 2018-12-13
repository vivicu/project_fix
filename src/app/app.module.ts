import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DalamComponent } from './dalam/dalam.component';
import { LuarComponent } from './luar/luar.component';

import { DalamListComponent } from './dalam/dalam-list/dalam-list.component';
import { DalamDetailComponent } from './dalam/dalam-detail/dalam-detail.component';
import { DalamItemComponent } from './dalam/dalam-list/dalam-item/dalam-item.component';
import { DalamEditComponent } from './dalam/dalam-edit/dalam-edit.component';

import { LuarListComponent } from './luar/luar-list/luar-list.component';
import { LuarDetailComponent } from './luar/luar-detail/luar-detail.component';
import { LuarItemComponent } from './luar/luar-list/luar-item/luar-item.component';
import { LuarEditComponent } from './luar/luar-edit/luar-edit.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { DalamStartComponent } from './dalam/dalam-start/dalam-start.component';
import { LuarStartComponent } from './luar/luar-start/luar-start.component';
import { DalamService } from './dalam/dalam.service';
import { LuarService } from './luar/luar.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      DalamComponent,
      LuarComponent,
      DalamListComponent,
      DalamDetailComponent,
      DalamItemComponent,
      DalamEditComponent,
      LuarListComponent,
      LuarDetailComponent,
      LuarItemComponent,
      LuarEditComponent,
      DropdownDirective,
      DalamStartComponent,
      LuarStartComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [
      DalamService,
      LuarService,
      DataStorageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
