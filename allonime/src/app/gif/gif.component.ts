import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif'
import { GIFS } from '../mock-gif';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gifs = GIFS;
  constructor() { }

  ngOnInit(): void {
  }

}
