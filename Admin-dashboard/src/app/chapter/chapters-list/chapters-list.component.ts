import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from 'app/shared/chapter.service';
import { CourseService } from 'app/shared/course.service';
import { Chapter } from 'app/shared/models/chapter';
import { Course } from 'app/shared/models/Course';
import { SectionService } from 'app/shared/section.service';

@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.css']
})
export class ChaptersListComponent implements OnInit {
  ChapterList=[];
  courseID = "" ;
  ChapterDetailList:Array<Chapter>=[];
  course:[];
  section : [];


  constructor(private router: Router,private route: ActivatedRoute,private chapterService:ChapterService,private courseService:CourseService,private sectionService:SectionService) { }

  ngOnInit(): void {
    this.courseID = this.route.snapshot.paramMap.get('id');
    console.log (this.courseID);

    this.chapterService.getChaptersByCourseID(this.courseID)
    .subscribe(
      res=> {this.ChapterList = res as [];
      console.log(this.ChapterList);
      this.courseService.getCourseByID(this.courseID) .subscribe(res => 
        {this.course = res as [];
        
          if(this.ChapterList.length > 0){
          this.ChapterList.forEach(chapter =>{
            console.log(chapter);
           
          
            
            this.sectionService.getSectionsByChapterID(chapter.ChapterID).subscribe( res =>{ this.section = res as [] ;
             
            let chapterObj = new Chapter();
            chapterObj.CourseID = chapter.CourseID;
            chapterObj.ChapterID = chapter.ChapterID;
            chapterObj.title = chapter.title;
            chapterObj.Description = chapter.Description;
            chapterObj.Sections= this.section;
            chapterObj.course=this.course;
    
            this.ChapterDetailList.push(chapterObj);
             
            });
          
             
        
        });

      }

      else{
       let chapterObj = new Chapter();
       chapterObj.CourseID =this.courseID;
       chapterObj.ChapterID = null;
       chapterObj.title = null;
       chapterObj.Description = null;
       chapterObj.Sections= null;
       chapterObj.course=this.course;

       this.ChapterDetailList.push(chapterObj);





      }


        }); 
    
    })

    console.log("chapterslist:" ,this.ChapterDetailList);

  }

  Deletecourse(id){

    this.courseService.deleteCourse(this.courseID)
    .subscribe(()=>{
      console.log("deleted");
      this.router.navigate(['/courses-list']);
      //alert('are you sure you want to delete this course');
    })

  }

}
