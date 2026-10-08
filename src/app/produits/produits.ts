import { Component, inject } from '@angular/core';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.html',
  
})
export class Produits {
  private produitService = inject(ProduitService);
  produits: string[] = this.produitService.getProduits();
}