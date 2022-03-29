import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-list-single-selection',
  templateUrl: './list-single-selection.component.html',
  styleUrls: ['./list-single-selection.component.scss']
})
export class ListSingleSelectionComponent {

  @ViewChild('selectionList') selectionList!: MatSelectionList;

  list = [
    { id: 1, name: 'Boots'},
    { id: 2, name: 'Clogs'},
    { id: 3, name: 'Loafers'},
    { id: 4, name: 'Moccasins'},
    { id: 5, name: 'Sneakers'}
  ];

  get selectedValues() {
    if (!this.selectionList) {
      return null;
    }
    if (this.selectionList.selectedOptions.selected.length === 0) {
      return 'none';
    }
    return this.selectionList.selectedOptions.selected.map(a => a.value).toString();
  }

  alert(message: string) {
    alert(message);
  }

}
