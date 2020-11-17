import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() inputEvent = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  getSearchTerm = (form: NgForm) => {
    this.inputEvent.emit(form.value.search);
  };
}
