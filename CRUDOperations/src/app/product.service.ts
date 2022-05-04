import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface products{
  id : number
  name : string,
  color : string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url = "http://localhost:5555/products";
  constructor(private http:HttpClient) { 
    
  }
  getAllProducts() : Observable<products[]>{
     return this.http.get<products[]>(this.url);
  }
  createProducts(products : products) : Observable<products>{
      const httpOptions = {headers : new HttpHeaders({'Content-Type': 'application/json'})};
     return this.http.post<products>(this.url ,products,httpOptions);
  }
  updateProducts(id:number) : Observable<products>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<products>(this.url + "/"+id,JSON.stringify({name:"laptop",color:'green' }),httpOptions);
  }
  deleteProducts(id:number) : Observable<number>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete<number>(this.url+"/"+id,httpOptions);
  }
}
