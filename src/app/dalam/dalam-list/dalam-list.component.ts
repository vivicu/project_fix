import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Dalam } from './dalam.model';
import { DalamService } from '../dalam.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dalam-list',
  templateUrl: './dalam-list.component.html',
  styleUrls: ['./dalam-list.component.css']
})
export class DalamListComponent implements OnInit, OnDestroy {

  dalams: Dalam[];
  subscription: Subscription;

  constructor(private dalamService: DalamService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.dalamService.dalamsChanged
    .subscribe(
      (dalams: Dalam[]) => {
        this.dalams = dalams;
      }
    );
    this.dalams = this.dalamService.getDalams();
  }

  onNewDalam() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
