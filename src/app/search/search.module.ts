import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SearchComponent} from './search/search.component';
import {SearchService} from './search.service';
import {routes} from './routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule {}
