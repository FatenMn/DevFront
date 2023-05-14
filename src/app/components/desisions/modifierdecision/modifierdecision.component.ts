import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecisionsService } from 'src/app/services/decisions/decisions.service';

@Component({
  selector: 'app-modifierdecision',
  templateUrl: './modifierdecision.component.html',
  styleUrls: ['./modifierdecision.component.css']
})
export class ModifierdecisionComponent implements OnInit {
  decision: any;
  idt: any;

  constructor(
    private act: ActivatedRoute,
    private _decision: DecisionsService,
    private router: Router
  ) {
    this.idt = this.act.snapshot.paramMap.get('id');
    console.log(this.idt);

  }

  modifier() {
    /*this._decision.modifierDecision(this.id, this.decision).subscribe(
      () => {
        console.log('Décision modifiée avec succès !');
        this.router.navigate(['/listedecision']);
      },
      err => {
        console.error('Erreur lors de la modification de la décision :', err);
      }
    );*/
  }

  ngOnInit(): void {

    this._decision.finddecisionById(this.idt).subscribe(
      res => {
        this.decision = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}