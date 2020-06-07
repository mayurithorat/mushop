export class Cart
{
    public product_id? : string
    public product_name : string;
    public product_count : number;
    public product_price : number;

  

    constructor(product_id:string,product_name:string,product_count:number,product_price:number)
    {

        this.product_id = product_id;
        this.product_name = product_name;
        this.product_count = product_count;
        this.product_price = product_price;
       

    }
   
}