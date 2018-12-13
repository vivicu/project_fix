import { Component, OnInit, OnDestroy } from '@angular/core';
import { Luar } from './luar.model';
import { LuarService } from '../luar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-luar-list',
  templateUrl: './luar-list.component.html',
  styleUrls: ['./luar-list.component.css']
})
export class LuarListComponent implements OnInit, OnDestroy {
  luars: Luar[];
  subscription: Subscription;

  constructor(private luarService: LuarService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.luarService.luarsChanged
    .subscribe(
      (luars: Luar[]) => {
        this.luars = luars;
      }
    );
    this.luars = this.luarService.getLuars();
  }

  onNewLuar() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
