import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {
  title: string = '';
  image: string = '';
  price: number = 0;
  origin: string = '';
  size: string = '';
  type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log('search');
    console.log('title: ' + this.title);
    console.log('origin: ' + this.origin);
    console.log('size: ' + this.size);
    console.log('type: ' + this.type);
  }

  reset() {
    console.log('reset');
  }
}
