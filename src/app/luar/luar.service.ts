import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Luar } from './luar-list/luar.model';

@Injectable({
  providedIn: 'root'
})
export class LuarService {
  luarsChanged = new Subject<Luar[]>();

  luars: Luar[] = [
    new Luar('Operation Finale', '2018', 'Komedi',
    // tslint:disable-next-line:max-line-length
    'Film Operation Finale berkisah tentang operasi agen Israel mencari Jendral NAZI yang bertanggungjawab atas kekejaman terhadap orang-orang Yahudi pada Perang Dunia II.',
    '../../../../src/app/img/operationFinale.jpg'),
    new Luar('Tumbbad', '2018', 'Fantasi',
    // tslint:disable-next-line:max-line-length
    'Sebuah cerita mitos tentang dewa yang membuat galaxy dengan latar belakang cerita ketika manusia berusaha membuat kuil untuk tempat dimana diri dilahirkan.',
    '../../../../src/app/img/tumbbad.jpg'),
    new Luar('The Cabin', '2018', 'Aksi',
    // tslint:disable-next-line:max-line-length
    'Sepasang remaja mengunjungi sebuah kabin di tengah hutan. Akan tetapi, pada pertengahan jalan mereka bertemu dengan seseorang yang tak dikenal dengan niat untuk memburu mereka.',
    '../../../../src/app/img/theCabin.jpg'),
    new Luar('Klippers', '2018', 'Drama',
    // tslint:disable-next-line:max-line-length
    'Seorang pembunuh bayaran dikirim oleh keryawannya untuk membunuh mantan istrinya. Dalam perintah untuk menyelesaikan misinya ini, dirinya menjadi dekat dengan target dan membuat misi ini menjadi sulit. Sekarang dia harus menghadapi konsekuensi dari perbuatannya.',
    '../../../../src/app/img/klippers.jpg')
  ];

setLuars(luars: Luar[]) {
  this.luars = luars;
  this.luarsChanged.next(this.luars.slice());
}

getLuars() {
  return this.luars.slice();
}

getLuar(index: number) {
  return this.luars[index];
}

constructor() { }

addLuar(luar: Luar) {
  this.luars.push(luar);
  this.luarsChanged.next(this.luars.slice());
}

updateLuar(index: number, newLuar: Luar) {
  this.luars[index] = newLuar;
  this.luarsChanged.next(this.luars.slice());
}

deleteLuar(index: number) {
  this.luars.splice(index, 1);
  this.luarsChanged.next(this.luars.slice());
}

}
