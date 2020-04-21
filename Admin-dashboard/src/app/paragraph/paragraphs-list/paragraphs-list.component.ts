import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParagraphService } from 'app/shared/paragraph.service';
import { SafeUrl, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-paragraphs-list',
  templateUrl: './paragraphs-list.component.html',
  styleUrls: ['./paragraphs-list.component.css'],
  providers: [NgxExtendedPdfViewerModule]
})
export class ParagraphsListComponent implements OnInit {
  sectionID="";
  pdfContent: SafeUrl;


  constructor(private route: ActivatedRoute,private paragraphService:ParagraphService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sectionID = this.route.snapshot.paramMap.get('id');

    this.paragraphService.getFile().subscribe((blob: any) => 
    { let objectURL = 'data:Video/mp4;base64,' + blob;
      
    this.pdfContent=this.sanitizer.bypassSecurityTrustResourceUrl(objectURL);

  
  });

}

}