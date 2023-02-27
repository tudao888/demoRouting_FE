import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  formCreate!: FormGroup;
  constructor(private productService: ProductService, private router:Router) {
  }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      name: new FormControl(""),
      img: new FormControl(""),
      status: new FormControl(true),
      price: new FormControl(""),
    })
  }
  create() {
    this.productService.createProduct(this.formCreate.value).subscribe((data) => {
      this.router.navigate(["/home"]);
    })
  }

}
