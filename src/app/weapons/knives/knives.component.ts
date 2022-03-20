import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Weapon, WeaponService } from '../../Services/weapon.service';

@Component({
  selector: 'app-knives',
  templateUrl: './knives.component.html',
  styleUrls: ['./knives.component.css']
})
export class KnivesComponent implements OnInit {

  constructor(public router: Router, public weaponService: WeaponService) { }
  
  ngOnInit(): void {
  }

  faLongArrowAltLeft = faLongArrowAltLeft;
  faSpinner = faSpinner;

  knives = ["karambit", "m9", "css", "bayonet", "huntsman", "flip", "butterfly", "gut", "ursus", "talon", "stiletto", "navaja", "bowie", "falchion", "daggers"];
  weaponSkins!: Weapon[];

  loadWeaponSkins(weapon: string) {
    this.weaponService.isLoading = true;

    
    this.weaponService.loadWeaponData(weapon).then((data) => {
      this.weaponSkins = data;
      this.weaponService.isLoading = false;
      this.router.navigate(['knives/' + weapon]);
    })
  }

  selectedSkin(weapon: string, skinid: number) {
    this.weaponService.selectWeaponSkin(weapon, skinid).then((resCode) => {
      this.weaponService.UpdateAlert(resCode);
    })
  }


}
