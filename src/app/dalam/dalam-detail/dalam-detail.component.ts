import { Component, OnInit } from '@angular/core';
import { Dalam } from '../dalam-list/dalam.model';
import { DalamService } from '../dalam.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dalam-detail',
  templateUrl: './dalam-detail.component.html',
  styleUrls: ['./dalam-detail.component.css']
})
export class DalamDetailComponent implements OnInit {

  dalam: Dalam;
  id: number;

  constructor(private dalamService: DalamService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.dalam = this.dalamService.getDalam(this.id);
      }
    );
  }

  onEditDalam() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteDalam() {
    this.dalamService.deleteDalam(this.id);
    this.router.navigate(['/dalams']);
  }

}
