import { Component, OnInit } from '@angular/core';
import { CourseService } from 'app/shared/course.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Image } from 'app/shared/models/image';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
 
export class CoursesListComponent implements OnInit {
  imageUrl: SafeUrl;
  CoursesList=[];
  imageList: Array<Image> = [];
 
  constructor(private courseService: CourseService,private sanitizer: DomSanitizer,private router:Router) { }
 
  ngOnInit() {
    this.courseService.getCoursesList()
    .subscribe(
    res=>{ this.CoursesList = res as [];
      this.CoursesList.forEach(course =>{
        console.log(course);
        console.log("===="+ course.Id);
        this.courseService.getImage(course.Id) .subscribe((blob: any) => 
      { let objectURL = 'data:image/jpeg;base64,' + blob;
      
      this.imageUrl=this.sanitizer.bypassSecurityTrustUrl(objectURL);
      let imageObj = new Image();
      imageObj.CourseID = course.Id;
      imageObj.title = course.title;
      imageObj.Description = course.Description;
      imageObj.imageUrl = this.imageUrl;
      this.imageList.push(imageObj);
 
    
    });
 
   
    console.log(this.imageList);
 
     }); 
 
     
 
      });
    
    
    
    
    
    
    
   
 
      /*this.courseService.getImage(course.CourseID) .subscribe((blob: any) => 
      { let objectURL = 'data:image/jpeg;base64,' + blob; this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);; });
 
    let imageObj = new Image();
    imageObj.CourseID = course.CourseID;
    imageObj.imageUrl = this.imageUrl;
    this.imageList.push(imageObj);
 
     }); */
    
  }
  onSelect(course){
    this.router.navigate(['/course-list',course.Id])

  }

 
}