import { WishListComponent } from './wish-list/wish-list.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Drink some coffee', true),
    new WishItem('Shower'),
    new WishItem('Grab laundry'),
    new WishItem('Say a prayer')
  ];

  listFilter: any = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter])
  };

  newWishText = '';
  title = 'wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText))// add wish to items array
    this.newWishText = ''; // clear the textbox
  }
}
