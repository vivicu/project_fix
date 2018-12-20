import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DalamService } from '../dalam/dalam.service';
import { LuarService } from '../luar/luar.service';
import { Dalam } from '../dalam/dalam-list/dalam.model';
import { Luar } from '../luar/luar-list/luar.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private dalamService: DalamService,
              private luarService: LuarService) {}

  storeDalams() {
    return this.http.put('https://film-435e4.firebaseio.com/dalams.json',
    this.dalamService.getDalams()),
    this.http.put('https://film-435e4.firebaseio.com/luar.json',
    this.luarService.getLuars());
  }

  getDalams() {
    this.http.get('https://film-435e4.firebaseio.com/dalams.json')
    .map(
      (response: Response) => {
        const dalams: Dalam[] = response.json();
        return dalams;
      })
    .subscribe(
      (dalams: Dalam[]) => {
        this.dalamService.setDalams(dalams);
      }
    );
  }

  getLuars() {
    this.http.get('https://film-435e4.firebaseio.com/luar.json')
    .map(
      (response: Response) => {
        const luar: Luar[] = response.json();
        return luar;
      })
    .subscribe(
      (luar: Luar[]) => {
        this.luarService.setLuars(luar);
      }
    );
  }

}
