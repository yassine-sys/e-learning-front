import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/shared/course.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from 'app/shared/models/Course';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl } from '@angular/forms';
import { DepartmentService } from 'app/shared/department.service';
declare var $: any;

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
 

  courseform = new FormGroup({
    title: new FormControl(''),
    Description: new FormControl(''),
    DepartmentID: new FormControl(''),
    OverViewVideo:new FormControl(''),
    CourseID:new FormControl(''),
    });

  courseID="";
  course : Course;
  selectedFile:File;
  notification = null;
  imageUrl: SafeUrl;
  fileToUpload: File = null;
  DepartmentList=[];
  DepartmentName='';



  constructor(private router:Router,private courseService:CourseService,private route: ActivatedRoute,private sanitizer: DomSanitizer,private departmentService:DepartmentService) { }

  showNotification(from,align){
    const type = ['','info','success','primary'];
  
    const color = Math.floor((Math.random() * 4) + 1);
  
    $.notify({
        icon: "notifications",
        message: "Course updated with success :D"
  
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
    this.courseID = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourseByID(this.courseID)
    .subscribe(
      res=>{ this.course = res as Course;
        console.log(this.course);
        this.courseform.controls['DepartmentID'].setValue(this.course.DepartmentID);

        this.departmentService.getDepartmentList()
        .subscribe(
        res=> {this.DepartmentList = res as [];
        console.log(this.DepartmentList);
        this.DepartmentName= this.DepartmentList.find(x=>x.DepartmentID == this.course.DepartmentID).Name 
        });

      });

      this.courseService.getImage(this.courseID) .subscribe((blob: any) => 
      { let objectURL = 'data:image/jpeg;base64,' + blob;
      
      this.imageUrl=this.sanitizer.bypassSecurityTrustUrl(objectURL);
    
    });


  }

  
  UpadateCourse(){

    console.log(this.courseform.value);
    this.courseService.putCourse(this.courseID,this.courseform.value)
    .subscribe(()=>{
      console.log("updated");
      //alert('are you sure you want to delete this course');
      this.router.navigate(['/courses-list']);
      this.courseform.reset();

    })
   

  }

}
