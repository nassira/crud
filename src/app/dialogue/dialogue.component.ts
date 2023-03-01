import { Component, OnInit } from '@angular/core';
import{ProductList}from '../interfaces/product-list'
import { NgForm } from '@angular/forms';
import{ProductdbService} from '../common/services/productdb.service'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  
  // This is an observable stream of a products array

  constructor(private ProductdbService:ProductdbService) {
   
   }
   
  ngOnInit(): void {
   
  }

  //products$: Observable<ProductList[]> = this.ProductdbService.getProducts();
  // This is an observable stream of a products array

  freshness=[]
  freshnessList=["Brand New","Second Hand", "Refurbished"]

  Productsempty:ProductList={
    ProductName:'',
    Category:'',
    date:'',
    Freshness:'',
    Price:0,
    Comment:''
  } 
  products=[]
  selected=this.Productsempty
  test(form:any){
    console.log(form.Price)
  }
  private _submitMessage = '';
  onSubmit(form: NgForm) {
    console.log(this.selected.ProductName);
    console.log(this.selected.Price);
    console.log(form.value)
  }


  fetchcourses(){
    this.ProductdbService.all()
    .subscribe((result:any) => this.products=result);
   }


  createcourse(course:any){
    return this.ProductdbService.create(course) 
    .subscribe(result => this.fetchcourses())
  }

   
  saveCourse(courses:any){
    
       this.createcourse(courses)
    }
   

  }
  
  