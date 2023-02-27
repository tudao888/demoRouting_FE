import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Navigation, Router} from "@angular/router";
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id: any;
  product: Product | undefined;
  formEdit!: FormGroup;

  constructor(private rout:ActivatedRoute, private productService: ProductService, private router:Router, private http:HttpClient) {
  }

  ngOnInit(): void {
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.productService.findById(this.id).subscribe(data =>{
        this.product = data
        this.formEdit = new FormGroup({
          id: new FormControl(this.product?.id),
          name: new FormControl(this.product?.name),
          img: new FormControl(this.product?.img),
          price: new FormControl(this.product?.price),
          status: new FormControl(this.product?.status)
        })
      })
    }
  }

  update() {
    this.productService.updateProduct(this.formEdit.value).subscribe((data) => {
      this.router.navigate(['/home'])
    })
  }

}
