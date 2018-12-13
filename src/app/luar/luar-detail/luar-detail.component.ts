import { Component, OnInit } from '@angular/core';
import { Luar } from '../luar-list/luar.model';
import { LuarService } from '../luar.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-luar-detail',
  templateUrl: './luar-detail.component.html',
  styleUrls: ['./luar-detail.component.css']
})
export class LuarDetailComponent implements OnInit {

  luar: Luar;
  id: number;

  constructor(private luarService: LuarService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.luar = this.luarService.getLuar(this.id);
      }
    );
  }

  onEditLuar() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteLuar() {
    this.luarService.deleteLuar(this.id);
    this.router.navigate(['/luar']);
  }

}
