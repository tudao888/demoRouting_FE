import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/ProductService";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  products: Product[] = [];
  constructor(private productService:ProductService, private router:Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    })
  }

  deleteById(id: number): void {
    this.productService.deleteById(id).subscribe((data) => {
      this.getAll()
    })
  }


}
