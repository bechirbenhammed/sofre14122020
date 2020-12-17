import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  addPersonne(formulaire) {
    this.cvService.addPersonne(formulaire.value);
    this.toastr.success(`${formulaire.value.name} ajouté avec succès`);
    this.router.navigate(['cv']);
  }
}
