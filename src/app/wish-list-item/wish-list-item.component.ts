import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import events from '../../shared/services/EventService'


@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {

  @Input() wish!: WishItem;

  constructor() { }

  ngOnInit(): void {

  }

  get cssClasses() {
    return { 'strikeout text-muted': this.wish.isComplete }
  }

  removeWish(){
    events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
