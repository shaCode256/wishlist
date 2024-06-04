import { WishItem } from './../../shared/models/wishItem';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';
  title = 'wishlist';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = ''; // clear the textbox
  }

}
