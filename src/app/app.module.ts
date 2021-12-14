import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhoneFormComponent,
    FilterPipePipe,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
