export class Product {
    name: string;
    category: string;
    discription: string;
    brand: string;
    price: number;
    color: string;
    modelNo: string;
    warrentyStatus: boolean;
    warrentyPeriod: string;
    quantity: number;
    size: string;
    varient: string;
    manuDate: string;
    expiryDate: string;
    origin: string;
    image: string;
    tags: string;
    _id: string;
    minPrice: number;
    maxPrice: number;
    constructor(details: any) {
        this.name = details.name || '';
        this.category = details.category || '';
        this.discription = details.discription || '';
        this.brand = details.brand || '';
        this.price = details.price || '';
        this.color = details.color || '';
        this.modelNo = details.modelNo || '';
        this.warrentyStatus = details.warrentyStatus || '';
        this.warrentyPeriod = details.warrentyPeriod || '';
        this.quantity = details.quantity || '';
        this.size = details.size || '';
        this.varient = details.varient || '';
        this.manuDate = details.manuDate || '';
        this.expiryDate = details.expiryDate || '';
        this.origin = details.origin || '';
        this.image = details.image || '';
        this.tags = details.tags || '';
        this._id = details._id || '';
        this.minPrice = details.minPrice || '';
        this.maxPrice = details.maxPrice || '';
    }
}