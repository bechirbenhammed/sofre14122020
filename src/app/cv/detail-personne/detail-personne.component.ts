import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { CvService } from './../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.findPersonneById(+params.id).subscribe(
        (personne) => (this.personne = personne),
        (erreur) => {
          this.toastr.error(`la personne d'id ${params.id} n'existe pas`);
          this.router.navigate(['cv']);
        }
      );
    });
  }
  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (data) => {
        this.toastr.success(`${this.personne.name} supprimé avec succès`);
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toastr.error(`Problème de suppression veuillez consulter l'admin`);
      }
    );
  }
}
