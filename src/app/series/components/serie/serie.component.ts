import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Serie } from '../../interfaces/serieInterface';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent {
  @Input()
  public serie!: Serie;

  @Output()
  public serieInfoEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  @Output()
  public serieIdEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  public emitSerieTitle(title: string): void {
    this.serieInfoEventEmitter.emit(title);
  }

}
