import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListComponent } from './components/list/list.component';
import {BasesService} from './services/bases.service';
import { FiltroPipe } from './pipes/filtro.pipe';
import {FormsModule} from '@angular/forms';
import { UniquePipe } from './pipes/unique.pipe';
import { AreasPipe } from './pipes/areas.pipe';
import { TipoPipe } from './pipes/tipo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    FiltroPipe,
    UniquePipe,
    AreasPipe,
    TipoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BasesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
