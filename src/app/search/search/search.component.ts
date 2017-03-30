import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private resultAsync: Observable<any[]>;
  control: FormControl;

  constructor(private searchService: SearchService) {
    this.control = new FormControl();
  }
  ngOnInit(): void {
    // This takes better care with switchMap, when Observable is HTTP return
    this.resultAsync = this.control.valueChanges
      .debounceTime(2000)
      .switchMap(term => term ? this.searchService.search(term) : Observable.of([]));
  }
  doSearch(term: string): void {
    this.resultAsync = this.searchService.search(term);
  }
}
