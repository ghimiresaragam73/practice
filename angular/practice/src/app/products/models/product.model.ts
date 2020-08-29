export class Product{
    name:string;
    category:string;
    price:Number;
    color:string;
    discription:string;
    brand:string;
    modelNo:string;
    warrentyStatus:boolean;
    warrentyPeriod:string;
    quantity:number;
    size:string;
    varient:string;
    manuDate:string;
    expiryDate:string;
    origin:string;
    tags:string;

    constructor(details:any){
        this.name = details.name || '';
        this.category = details.category || '';
        this.price = details.price || '';
        this.discription = details.discription || '';
        this.brand = details.brand || '';
        this.modelNo = details.modelNo || '';
        this.warrentyStatus = details.warrentyStatus || '';
        this.warrentyPeriod = details.warrentyPeriod || '';
        this.quantity = details.quantity || '';
        this.size = details.size || '';
        this.varient = details.varient || '';
        this.manuDate = details.manuDate || '';
        this.expiryDate = details.expiryDate || '';
        this.origin = details.origin || '';
        this.tags = details.tags || '';
    }
    
}