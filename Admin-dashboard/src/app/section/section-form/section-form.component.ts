import { Component, OnInit } from '@angular/core';
import { SectionService } from 'app/shared/section.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {
 
  chapterID='';
  sectionform = new FormGroup({
  title: new FormControl(''),
  Description: new FormControl(''),
  ChapterID: new FormControl(''),

})


  constructor(private sectionService:SectionService,private route: ActivatedRoute) { }

  showNotification(from,align){
    const type = ['','info','success','primary'];
  
    const color = Math.floor((Math.random() * 4) + 1);
  
    $.notify({
        icon: "notifications",
        message: "Section added with success :D"
  
    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

  ngOnInit(): void {

    this.chapterID = this.route.snapshot.paramMap.get('id');
    console.log(this.chapterID);
  }

  onSubmit(){
    
    console.log(this.sectionform.value);
     this.sectionService.postSection(this.sectionform.value).subscribe(
      res => {
        console.log(res);
        
      })
      this.sectionform.reset();
      
     }

}
