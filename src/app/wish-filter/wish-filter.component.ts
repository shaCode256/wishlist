import { Component, Output, EventEmitter, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter: any = '0';

  ngOnInit(): void {
    this.updateFilter('0');
  }
  
  updateFilter(value: any) {
    this.filter= filters[value];
    this.filterChange.emit(this.filter);
  }
}
