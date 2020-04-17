import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paragraph-form',
  templateUrl: './paragraph-form.component.html',
  styleUrls: ['./paragraph-form.component.css']
})
export class ParagraphFormComponent implements OnInit {
  sectionID="";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sectionID = this.route.snapshot.paramMap.get('id');

  }

}
