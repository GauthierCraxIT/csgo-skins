
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredComponent } from './registered/registered.component';
import { HeavyComponent } from './weapons/heavy/heavy.component';
import { KnivesComponent } from './weapons/knives/knives.component';
import { PistolsComponent } from './weapons/pistols/pistols.component';
import { RiflesComponent } from './weapons/rifles/rifles.component';
import { SmgsComponent } from './weapons/smgs/smgs.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "registered", component: RegisteredComponent },
  { path: "registered/:id", component: RegisteredComponent },
  {
    path: "pistols", component: PistolsComponent, children: [
      { path: "glock" },
      { path: "cz75" },
      { path: "usp" },
      { path: "deagle" },
      { path: "fiveseven" },
      { path: "p250" },
      { path: "tec9" },
      { path: "dualies" }
    ]
  },
  {
    path: "smgs", component: SmgsComponent, children: [
      { path: "mac10" },
      { path: "mp5" },
      { path: "mp7" },
      { path: "mp9" },
      { path: "p90" },
      { path: "ppbizon" },
      { path: "ump" }
    ]
  },
  {
    path: "rifles", component: RiflesComponent, children: [
      { path: "ak47" },
      { path: "aug" },
      { path: "awp" },
      { path: "famas" },
      { path: "G3SG1" },
      { path: "m4a1s" },
      { path: "m4a4" },
      { path: "scar20" },
      { path: "sg553" },
      { path: "ssg" }
    ]
  },
  {
    path: "heavy", component: HeavyComponent, children: [
      { path: "m249" },
      { path: "mag7" },
      { path: "negev" },
      { path: "nova" },
      { path: "sawedoff" },
      { path: "xm1014" }
    ]
  },

  {
    path: "knives", component: KnivesComponent, children: [
      { path: "karambit" },
      { path: "m9" },
      { path: "css" },
      { path: "bayonet" },
      { path: "huntsman" },
      { path: "flip" },
      { path: "butterfly" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
