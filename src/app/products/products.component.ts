import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products= products;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //route params'da böyle yapıyorduk
    //this.route.paramMap.subscribe(params=>{
    //  let id = params.get('id');
    //});

    //query params için böyle yaparız
    this.route.queryParamMap.subscribe(params=>{
      let page = params.get('page');
      console.log(params);
      console.log(page);
    });

    //asenkron işlemi yaptık çünkü şuan ngOnInit altındayız
  }

  loadProducts(){
    this.router.navigate(['products'], {queryParams:{
      page:1
    }});


  }

}
