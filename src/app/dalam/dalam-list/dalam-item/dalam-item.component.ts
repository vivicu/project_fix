import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dalam } from '../dalam.model';
import { DalamService } from '../../dalam.service';

@Component({
  selector: 'app-dalam-item',
  templateUrl: './dalam-item.component.html',
  styleUrls: ['./dalam-item.component.css']
})
export class DalamItemComponent implements OnInit {

  @Input() dalam: Dalam;
  @Input() index: number;

  ngOnInit() {
  }

}
