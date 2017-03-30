import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: any[];
  constructor(private searchService: SearchService) {}
  ngOnInit(): void {}
  doSearch(term: string): void {
    this.searchService.search(term).subscribe(items => this.results = items);
  }
}
