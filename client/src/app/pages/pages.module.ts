/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Pages Module - pages.module.ts
*/

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PartialsModule } from "../partials/partials.module";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, PartialsModule, RouterModule],
    declarations: [
        AboutComponent,
        HomeComponent,],
    exports: [
        AboutComponent,
        HomeComponent,
        PartialsModule
    ]
})

export class PagesModule {}