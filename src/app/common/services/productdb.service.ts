import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductList } from 'src/app/interfaces/product-list';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const BASE_URL='http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class ProductdbService {
model='products'
  constructor(private http: HttpClient) { }

  all(){
    return this.http.get(this.getUrl()) // call the service
   }
   private getUrl(){
    return `${BASE_URL}/${this.model}` ;
  }

  find(id:any){
    return this.http.get(this.getUrlwithId(id));
  } 
  create(course:any){
    return this.http.post(this.getUrl(),course);
  } 
  update(course:any){
    return this.http.put(this.getUrlwithId(course.id),course)
  }
   private getUrlwithId(id:any){
    return `${this.getUrl()}/${id}` ;
   }
   /* delete(id){
    return this.http.delete(this.getUrlwithId(id))
   } */
   
   delete(course:any){
       return this.http.delete(this.getUrlwithId(course.id),course)
    }

}