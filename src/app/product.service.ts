import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Album } from './album'; 
import { AlbumInfo } from './album-info';
import { Product } from './product';
import { ProductListComponent } from './product-list/product-list.component';

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';
  private _productsUrl: string = '../assets/products.json';
  
  constructor(private _http: Http) { }

  getAlbum(id:number): Observable<AlbumInfo> {
    return this._http.get(this._albumUrl).map(response => <AlbumInfo>response.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
  }
}
