import { Component, OnInit, Input } from '@angular/core';
import { Luar } from '../luar.model';

@Component({
  selector: 'app-luar-item',
  templateUrl: './luar-item.component.html',
  styleUrls: ['./luar-item.component.css']
})
export class LuarItemComponent implements OnInit {

  @Input() luar: Luar;
  @Input() index: number;

  ngOnInit() {
  }

}
