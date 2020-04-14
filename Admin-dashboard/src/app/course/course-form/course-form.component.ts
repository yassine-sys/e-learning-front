import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'app/shared/department.service';
import { CourseService } from 'app/shared/course.service';
import { FormBuilder, FormArray, Validators, FormGroup, NgForm, FormControl } from '@angular/forms';
import {Course} from 'app/shared/models/Course';
declare var $: any;
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  //course: Course = new Course();
  courseform = new FormGroup({
    title: new FormControl(''),
    Description: new FormControl(''),
    DepartmentID: new FormControl(''),
    OverViewVideo:new FormControl(''),
    });
  DepartmentList=[];
  selectedFile:File;
  notification = null;
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(private departmentService: DepartmentService,
    private courseService: CourseService) { }

    showNotification(from,align){
      const type = ['','info','success','primary'];
    
      const color = Math.floor((Math.random() * 4) + 1);
    
      $.notify({
          icon: "notifications",
          message: "Course added with success :D"
    
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
  
    

  ngOnInit() {

    this.departmentService.getDepartmentList()
    .subscribe(
    res=> this.DepartmentList = res as []);
    console.log("hhh");
  
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(){
    
    console.log(this.courseform.value);
     this.courseService.postFile(this.courseform.value,this.fileToUpload).subscribe(
      res => {
        console.log(res);
        
      })
      this.courseform.reset();
      
     }

 
  /*console.log('both');

  this.notification = { class: 'text-primary', message: 'Course added with success!' };*/

  




}

