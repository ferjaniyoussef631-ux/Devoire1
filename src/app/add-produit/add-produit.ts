import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css',
})
export class AddProduit {
  private produitService = inject(ProduitService);
  private router = inject(Router);

  nom: string = "";

  ajouterProduit(): void {
    if (this.nom.trim() === "") {
      return;
    }
    this.produitService.ajouter(this.nom.trim());
    this.nom = "";
    this.router.navigate(['/produits']);
  }
}