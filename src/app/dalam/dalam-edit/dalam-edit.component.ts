import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DalamService } from '../dalam.service';

@Component({
  selector: 'app-dalam-edit',
  templateUrl: './dalam-edit.component.html',
  styleUrls: ['./dalam-edit.component.css']
})
export class DalamEditComponent implements OnInit {

  id: number;
  editMode = false;
  dalamForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private dalamService: DalamService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.dalamService.updateDalam(this.id, this.dalamForm.value);
    } else {
      this.dalamService.addDalam(this.dalamForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let dalamImagePath = '';
    let dalamName = '';
    let dalamTahun = '';
    let dalamGenre = '';
    let dalamDescription = '';
    if (this.editMode) {
      const dalam = this.dalamService.getDalam(this.id);
      dalamImagePath = dalam.imagePath;
      dalamName = dalam.name;
      dalamTahun = dalam.tahun;
      dalamGenre = dalam.genre;
      dalamDescription = dalam.description;
    }
    this.dalamForm = new FormGroup({
      'imagePath': new FormControl(dalamImagePath, Validators.required),
      'name': new FormControl(dalamName, Validators.required),
      'tahun': new FormControl(dalamTahun, Validators.required),
      'genre': new FormControl(dalamGenre, Validators.required),
      'description': new FormControl(dalamDescription, Validators.required)
    });
  }

}
