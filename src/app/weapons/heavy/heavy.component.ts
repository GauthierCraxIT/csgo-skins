import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLongArrowAltLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Skin2, Weapon, WeaponService } from '../../Services/weapon.service';

@Component({
  selector: 'app-heavy',
  templateUrl: './heavy.component.html',
  styleUrls: ['./heavy.component.css']
})
export class HeavyComponent implements OnInit {

  constructor(public router: Router, private http: HttpClient, public weaponService: WeaponService) { }

  heavies = ["m249", "mag7", "negev", "nova", "sawedoff", "xm1014"];

  faLongArrowAltLeft = faLongArrowAltLeft;
  faSpinner = faSpinner;

  

  ngOnInit(): void {
    this.getSelectedSkins();
  }

  rifleData!: Skin2[];
  getSelectedSkins() {
    if (localStorage.getItem("id")) {

      this.weaponService.getSelectedSkinsImages("Heavy").then((data) => {
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
      this.router.navigate(['heavy/' + weapon]);
    })
  }


  selectedSkin(weapon: string, skinid: number) {
    this.weaponService.selectWeaponSkin(weapon, skinid).then((resCode) => {
      this.weaponService.UpdateAlert(resCode);
    })
  }

}
