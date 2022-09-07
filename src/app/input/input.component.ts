import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() titles!: string[];
  @Output() titleChange = new EventEmitter<string>();

  titleControl = new FormControl('');

  filteredTitles: Observable<string[]> = this.titleControl.valueChanges.pipe(
    startWith(''),
    map((title: string) => this._filter(title || ''))
  );

  private _filter(title: string): string[] {
    const filterTitle = title.toLowerCase();

    return this.titles.filter((title: string) => {
      return title.toLowerCase().includes(filterTitle);
    });
  }

  onSubmit(): void {
    this.titleChange.emit(this.titleControl.value);
    this.titleControl.reset();
  }
}
