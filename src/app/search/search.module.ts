import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {routes} from './routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [SearchComponent]
})
export class SearchModule {}
