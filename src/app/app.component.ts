import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../shared/services/EventService'
import {provideHttpClient} from '@angular/common/http';
import { WishService } from './wish.service';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent, WishListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent implements OnInit {
  items!: WishItem[];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      // console.log(wish);
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    })
  }

  filter: any;

  title = "wish-list"
}
