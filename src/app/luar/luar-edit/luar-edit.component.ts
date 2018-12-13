import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LuarService } from '../luar.service';

@Component({
  selector: 'app-luar-edit',
  templateUrl: './luar-edit.component.html',
  styleUrls: ['./luar-edit.component.css']
})
export class LuarEditComponent implements OnInit {

  id: number;
  editMode = false;
  luarForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private luarService: LuarService,
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
      this.luarService.updateLuar(this.id, this.luarForm.value);
    } else {
      this.luarService.addLuar(this.luarForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let luarImagePath = '';
    let luarName = '';
    let luarTahun = '';
    let luarGenre = '';
    let luarDescription = '';
    if (this.editMode) {
      const luar = this.luarService.getLuar(this.id);
      luarImagePath = luar.imagePath;
      luarName = luar.name;
      luarTahun = luar.tahun;
      luarGenre = luar.genre;
      luarDescription = luar.description;
    }
    this.luarForm = new FormGroup({
      'imagePath': new FormControl(luarImagePath, Validators.required),
      'name': new FormControl(luarName, Validators.required),
      'tahun': new FormControl(luarTahun, Validators.required),
      'genre': new FormControl(luarGenre, Validators.required),
      'description': new FormControl(luarDescription, Validators.required)
    });
  }

}
