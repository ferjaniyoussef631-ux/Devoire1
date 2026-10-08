import { Component, OnInit } from '@angular/core';
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
  produits: Produit[];

  constructor(private produitService: ProduitService) {
    this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {}

  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p);
  }
}