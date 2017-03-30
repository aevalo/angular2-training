import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {async, ComponentFixture, TestBed, tick, fakeAsync} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {SearchService} from '../search.service';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs/Rx';

class FakeSearchService {
  search(term: string): Observable<any[]> {
    return Observable.of([
      {
        full_name: 'Result name',
        html_url: 'http://localhost',
        owner: {
          login: 'Result login',
          avatar_url: 'http://localhost/avatar'
        }
      }
    ]);
  }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{provide: SearchService, useClass: FakeSearchService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = fixture.debugElement.injector.get(SearchService);
    spyOn(service, 'search').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header', () => {
    expect(fixture.nativeElement.textContent).toContain('GitHub Search');
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent).toContain('GitHub Search');
  });

  it('should query seach service', fakeAsync(() => {
    component.control.setValue('Searching something');
    tick(2000);
    fixture.detectChanges();
    const item = fixture.debugElement.query(By.css('.result-link')).nativeElement;
    expect(item.text).toContain('Result name');
    expect(service.search).toHaveBeenCalled();
  }));
});
