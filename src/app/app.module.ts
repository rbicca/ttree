import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';

import { GrupoService } from './Services/grupo.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GrupoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
