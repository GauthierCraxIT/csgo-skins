import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {


  constructor(private http: HttpClient) { }

  selectedSkinsImgs!: Skin2[];
  weapons!: Weapon[];
  greenAlert = '';
  isLoading = false;

  getSelectedSkinsImages(type : string) {
    return new Promise<Skin2[]>(resolve => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');


      this.http.get<Skin2[]>(environment.localHost + "/api/skinchangerbyid/" + localStorage.getItem("id") + "/" + type, { headers })
        .pipe(take(1))
        .subscribe(data => {
          this.selectedSkinsImgs = data;
          console.dir(data);



          resolve(this.selectedSkinsImgs);
        });
    });
  }

  loadWeaponData(weapon: string) {
    return new Promise<Weapon[]>(resolve => {

      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      let params = new HttpParams();
      params.append("weapon", weapon);



      this.http.get<Weapon[]>(environment.localHost + "/api/skins?Weapon=" + weapon, { headers })
        .pipe(take(1))
        .subscribe(data => {
        this.weapons = data;
        this.weapons.forEach(x => {
          x.skin.img = "data:image/png;base64," + x.skin.image;
        })
          resolve(this.weapons);
      })
    })
  }

  selectWeaponSkin(_weapon: string, _skinid: number) {
    return new Promise(resolve => {
      this.http.post(environment.localHost + "/api/skins", { id: localStorage.getItem("id"), weapon: _weapon, skinId: _skinid }, { observe: 'response' }).subscribe(x => {
        resolve(x.status);
      })
    })
  }

  UpdateAlert(resCode: unknown) {
    if (resCode == 200) {
      this.greenAlert = "Successfully updated your skin.";

      setTimeout(() => {
        this.greenAlert = "";
      }, 2500);
    }
  }
}

export interface Skin2 {
  img: string;
  weapon: string;
}

export interface Weapon {
  name: string;
  skin: Skin;
}

export interface Skin {
  skinId: number,
  name: string,
  image: string
  img: string
}
