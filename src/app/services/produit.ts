import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produits: string[] = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];

  getProduits(): string[] {
    return this.produits;
  }

  ajouter(nom: string): void {
    this.produits.push(nom);
  }
}