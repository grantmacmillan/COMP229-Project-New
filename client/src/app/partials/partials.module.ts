/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: Partials Module - partials.module.ts
*/

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BasePageComponent } from "./base-page/base-page.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [
        BasePageComponent,
        FooterComponent,
        HeaderComponent
      ],
    exports: [
        BasePageComponent,
        FooterComponent,
        HeaderComponent
    ]
})
export class PartialsModule {}
