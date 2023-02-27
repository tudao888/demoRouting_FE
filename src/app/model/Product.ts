export class Product{
  id!: number;
  name!: string;
  img!:string;
  status!: boolean;
  price!:number;


  constructor(id: number, name: string, img: string, status: boolean, price: number) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.status = status;
    this.price = price;
  }
}
