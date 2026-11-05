import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';


@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();
  categories! : Categorie[];
  updatedCatId! : number;


  constructor(private activatedRoute: ActivatedRoute,
            private router: Router,
            private produitService: ProduitService,
            private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  this.categories = this.produitService.listeCategories();
  this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id'])
    .subscribe(prod => {
      this.currentProduit = prod;
      this.updatedCatId = this.currentProduit.categorie?.idCat!;
      this.cdr.markForCheck();
    });
}

updateProduit() {
  this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId);
  this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']);
  });
}
}