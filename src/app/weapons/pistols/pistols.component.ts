import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLongArrowAltLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Skin2, Weapon, WeaponService } from '../../Services/weapon.service';

@Component({
  selector: 'app-pistols',
  templateUrl: './pistols.component.html',
  styleUrls: ['./pistols.component.css']
})
export class PistolsComponent implements OnInit {

  constructor(public router: Router, public weaponService: WeaponService) { }

  faLongArrowAltLeft = faLongArrowAltLeft;
  faSpinner = faSpinner;

  pistols = ["glock", "usp", "cz75", "deagle", "fiveseven", "p250", "tec9", "dualies"];
  
  

  ngOnInit(): void {
    this.getSelectedSkins();
  }

  rifleData!: Skin2[];
  getSelectedSkins() {
    if (localStorage.getItem("id")) {

      this.weaponService.getSelectedSkinsImages("Pistol").then((data) => {
        this.rifleData = data;
      });
    }
  }

  weaponSkins!: Weapon[];
  loadWeaponSkins(weapon: string) {
    this.weaponService.isLoading = true;

    this.weaponService.loadWeaponData(weapon).then((data) => {
      this.weaponSkins = data;
      this.weaponService.isLoading = false;
      this.router.navigate(['pistols/' + weapon]);
    })
  }

  selectedSkin(weapon: string, skinid: number) {
    this.weaponService.selectWeaponSkin(weapon, skinid).then((resCode) => {
      this.weaponService.UpdateAlert(resCode);
    })
  }

}
