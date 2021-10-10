import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared/shared.service";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from '../../store/action';
import { addProduct, removeProduct } from '../../store/action';
import { ProductGroup, selectGroupedCartEntries } from '../../store/selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartEntries$: Observable<ProductGroup[]>
  products: any=[];
  grandTotal: number= 0;

  constructor(private shared: SharedService, private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
    console.log(this.cartEntries$);
    
  }

  ngOnInit(): void {
    console.log(this.shared);

    this.products = this.shared.getCart()
    console.log(this.products);

    let grandTotal = 0;
    for(let item of this.products)
    {
      grandTotal += item.price;
      this.grandTotal=grandTotal;
    }
    console.log(grandTotal);
    

  }
  del(data:any){
    this.products.pop(data)
    console.log(this.products)
    localStorage.setItem("Cart", JSON.stringify(this.products))
    window.location.reload()
  }
  removeCartItem(index: any){
        console.log(index);
        this.products.splice(index,1);
        localStorage.setItem("Cart", JSON.stringify(this.products))
        window.location.reload()
  }
  
  removeAllCart(){
    this.products = [];
    localStorage.setItem("Cart", JSON.stringify(this.products))
    window.location.reload()
    console.log(this.shared);
    
  }

  clearEntries () {
    this.store.dispatch(clearCart());
  }

  more(entry: ProductGroup) {
    this.store.dispatch(addProduct(entry.product));
  }

  less (entry: ProductGroup) {
    this.store.dispatch(removeProduct(entry.product));
  }

}