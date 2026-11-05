import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = 'http://localhost:8090/produits/api';
categories: Categorie[];

constructor(private http: HttpClient) {
  this.categories = [
    { idCat: 1, nomCat: 'PC' },
    { idCat: 2, nomCat: 'Imprimante' }
  ];
}

  listeProduit(): Observable<Produit[]>{
return this.http.get<Produit[]>(this.apiURL);
}


  ajouterProduit( prod: Produit):Observable<Produit>{
return this.http.post<Produit>(this.apiURL, prod, httpOptions);
}

  supprimerProduit(id: number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
}

consulterProduit(id: number): Observable<Produit> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Produit>(url);
}

updateProduit(prod: Produit): Observable<Produit> {
  return this.http.put<Produit>(this.apiURL, prod, httpOptions);
}
listeCategories(): Categorie[] {
  return this.categories;
}

consulterCategorie(id: number): Categorie {
  return this.categories.find(cat => cat.idCat == id)!;
}

 /* listeCategories():Categorie[] {
return this.categories;
}
consulterCategorie(id:number): Categorie{
return this.categories.find(cat => cat.idCat == id)!;
}
*/
}