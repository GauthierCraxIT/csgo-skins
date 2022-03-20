import { HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLongArrowAltLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Skin2, Weapon, WeaponService } from '../../Services/weapon.service';

@Component({
  selector: 'app-rifles',
  templateUrl: './rifles.component.html',
  styleUrls: ['./rifles.component.css']
})
export class RiflesComponent implements OnInit {

  constructor(public router: Router, public weaponService: WeaponService) {}

  rifles = ["ak47", "aug", "awp", "famas", "G3SG1", "m4a1s", "m4a4", "scar20", "sg553", "ssg"];
  faLongArrowAltLeft = faLongArrowAltLeft;
  faSpinner = faSpinner;

  

  ngOnInit(): void {
    this.getSelectedSkins();
  }

  rifleData!: Skin2[];
  getSelectedSkins() {
    if (localStorage.getItem("id")) {
      this.weaponService.getSelectedSkinsImages("Rifles").then((data) => {
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
      this.router.navigate(['rifles/' + weapon]);
    })
  }

  selectedSkin(weapon: string, skinid: number) {
    this.weaponService.selectWeaponSkin(weapon, skinid).then((resCode) => {
      this.weaponService.UpdateAlert(resCode);
    });
  }



}
