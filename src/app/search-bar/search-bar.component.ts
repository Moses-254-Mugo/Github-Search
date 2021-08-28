import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() userEmitter = new EventEmitter<any>()

  searchTerm: any;


  sendUser(){
    this.userEmitter.emit(this.searchTerm)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
