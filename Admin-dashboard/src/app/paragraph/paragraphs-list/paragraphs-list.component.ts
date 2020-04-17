import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paragraphs-list',
  templateUrl: './paragraphs-list.component.html',
  styleUrls: ['./paragraphs-list.component.css']
})
export class ParagraphsListComponent implements OnInit {
  sectionID="";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sectionID = this.route.snapshot.paramMap.get('id');
  }

}
