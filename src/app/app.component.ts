import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Title } from 'src/Title.interface';
import { TitlesService } from './titles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private titlesService: TitlesService) {}

  selectedList: string[] = [];
  titles: Title[] = this.titlesService.getTitles();
  titleFullNames = this._getTitleFullNames(this.titles);

  private _getTitleFullNames(titles: Title[]): string[] {
    return titles.map((title) => title.full_name);
  }

  addToList(title: string): void {
    const isDup: boolean = this.selectedList.some(
      (titleInList) => titleInList === title
    );

    if (!isDup) {
      this.selectedList = [...this.selectedList, title];
    }
    console.log(this.selectedList);
  }

  removeFromList(title: string): void {
    this.selectedList = this.selectedList.filter(
      (titleToRemove) => titleToRemove !== title
    );
  }
}
