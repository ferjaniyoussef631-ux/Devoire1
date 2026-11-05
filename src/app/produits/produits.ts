import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';



@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './produits.html',
  styles: ``
})
export class Produits implements OnInit {
  produits!: Produit[];

  constructor(private produitService: ProduitService,
            private cdr: ChangeDetectorRef) { }
 

  ngOnInit(): void {
  this.chargerProduits();
}

chargerProduits() {
  this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    this.cdr.markForCheck();
  });
}

supprimerProduit(p: Produit) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
      console.log("produit supprimé");
      this.chargerProduits();
    });
  }
}