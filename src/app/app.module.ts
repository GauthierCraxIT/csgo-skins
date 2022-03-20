import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PistolsComponent } from './weapons/pistols/pistols.component';
import { RiflesComponent } from './weapons/rifles/rifles.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WeaponService } from './Services/weapon.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeavyComponent } from './weapons/heavy/heavy.component';
import { SmgsComponent } from './weapons/smgs/smgs.component';
import { KnivesComponent } from './weapons/knives/knives.component';
import { RegisteredComponent } from './registered/registered.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    PistolsComponent,
    RiflesComponent,
    LoginComponent,
    RegisterComponent,
    HeavyComponent,
    SmgsComponent,
    KnivesComponent,
    RegisteredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [WeaponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
