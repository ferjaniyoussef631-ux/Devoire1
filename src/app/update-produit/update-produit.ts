import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService) { }

  ngOnInit() {
    this.currentProduit =
      this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']);
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}