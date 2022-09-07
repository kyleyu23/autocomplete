import { Injectable } from '@angular/core';
import { Title } from 'src/Title.interface';
import { titles } from '../titles';

@Injectable({
  providedIn: 'root',
})
export class TitlesService {
  getTitles(): Title[] {
    return titles;
  }
}
