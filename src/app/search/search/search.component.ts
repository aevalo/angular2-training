import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchTerm: string;
  results: any[];
  constructor(private searchService: SearchService) {}
  ngOnInit(): void {}
  doSearch(): void {
    this.searchService.search(this.searchTerm).subscribe(items => this.results = items);
  }
}
