import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      this.toastr.warning(`${this.personne.name} est déjà embauché`);
    } else {
      this.toastr.success(
        `${this.personne.name} a été ajouté à la liste des embauchés`
      );
    }
  }
}
