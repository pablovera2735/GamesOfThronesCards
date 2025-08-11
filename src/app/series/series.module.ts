import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './pages/main-pages.component';
import { SeriesComponent } from './components/list-series/list-series.component';
import { SerieComponent } from './components/serie/serie.component';
import { FilterSeriesComponent } from './components/filter-series/filter-series.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SeriesComponent,
    SerieComponent,
    FilterSeriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MainPageComponent,
    FilterSeriesComponent
  ]
  
})
export class SeriesModule {}
