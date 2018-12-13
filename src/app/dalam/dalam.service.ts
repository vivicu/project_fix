import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Dalam } from './dalam-list/dalam.model';

@Injectable({
  providedIn: 'root'
})
export class DalamService {
  dalamsChanged = new Subject<Dalam[]>();
  dalams: Dalam[] = [
    new Dalam('Rasuk', '2018', 'Horor',
    // tslint:disable-next-line:max-line-length
    'Langgir Janakan adalah seorang yang di benci oleh ibunya sendiri. Langgir ini memiliki 3 orang teman baik. Suatu ketika mereka berlibur ke villa. Di villa ini kesetiaann temannya di uji.',
    '../../../../src/app/img/rasuk.jpg'),
    new Dalam('The Perfect Husband', '2018', 'Romantis',
    // tslint:disable-next-line:max-line-length
    'Ayla adalah seorang siswi yang baru memasuku SMA dan suka musik rock.Ayla juga meiliki pacar yang suka bermain musik rock. Namun, saat itu datang seorang pilot mengaku bahwa dirinya adalah suaminya kelak yang bernama Arsen. Bagaimana kehidupan Ayla selanjutnya?.',
    '../../../../src/app/img/thePerfectHusband.jpg'),
    new Dalam('Takut Kawin', '2018', 'Drama',
    // tslint:disable-next-line:max-line-length
    'Bimo dan Lala ingin menikah setelah pernikahan Romy. Namun ketika pernikahan Romy gagal, Bimo terus-menerus menikah.',
    '../../../../src/app/img/takutKawin.jpg'),
    new Dalam('Raja, Ratu dan Rahasia', '2018', 'Komedi',
    // tslint:disable-next-line:max-line-length
    'Ratu bergabung dengan klub bernama Komplotan Rahasia untuk membawa suka cita bagi dirinya sendiri karena orang tuanya sudah meniggal. Lalu ada Raja yang mencintai Ratu. Tapi Ratu punya rahasia.',
    '../../../../src/app/img/rajaRatu&Rahasia.jpg')
  ];

setDalams(dalams: Dalam[]) {
  this.dalams = dalams;
  this.dalamsChanged.next(this.dalams.slice());
}

getDalams() {
  return this.dalams.slice();
}

getDalam(index: number) {
  return this.dalams[index];
}

constructor() { }

addDalam(dalam: Dalam) {
  this.dalams.push(dalam);
  this.dalamsChanged.next(this.dalams.slice());
}

updateDalam(index: number, newDalam: Dalam) {
  this.dalams[index] = newDalam;
  this.dalamsChanged.next(this.dalams.slice());
}

deleteDalam(index: number) {
  this.dalams.splice(index, 1);
  this.dalamsChanged.next(this.dalams.slice());
}

}
