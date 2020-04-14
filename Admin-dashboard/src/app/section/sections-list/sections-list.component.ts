import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'app/shared/section.service';
import { Section } from 'app/shared/models/section';
import { ChapterService } from 'app/shared/chapter.service';
import { CourseService } from 'app/shared/course.service';
import { Chapter } from 'app/shared/models/chapter';
import { Course } from 'app/shared/models/Course';

@Component({
  selector: 'app-sections-list',
  templateUrl: './sections-list.component.html',
  styleUrls: ['./sections-list.component.css']
})
export class SectionsListComponent implements OnInit {

  SectionList=[];
  chapterID = "" ;
  SectionDetailList:Array<Section>=[];
  course: Course;
  chapter : Chapter;


  constructor(private route: ActivatedRoute,private sectionService:SectionService,private chapterService:ChapterService,private courseService:CourseService) { }

  ngOnInit(): void {
    this.chapterID = this.route.snapshot.paramMap.get('id');
    console.log (this.chapterID);

    this.chapterService.getChapterByID(this.chapterID)
    .subscribe(
      res=> {this.chapter = res as Chapter;
     // console.log('bbb' ,this.chapter.CourseID);


      this.courseService.getCourseByID(this.chapter.CourseID) .subscribe(res => 
        {this.course = res as Course;
          
            
            this.sectionService.getSectionsByChapterID(this.chapterID).subscribe( res =>{ this.SectionList = res as [] ;
              console.log('adel' ,this.SectionList);
            if(this.SectionList.length > 0){
            this.SectionList.forEach(section =>{
                console.log(section);
            let sectionObj = new Section();
            sectionObj.ChapterID = section.ChapterID;
            sectionObj.SectionID = section.SectionID;
            sectionObj.title = section.title;
            sectionObj.Description = section.Description;
            sectionObj.chapter= this.chapter;
            sectionObj.course=this.course;
    
            this.SectionDetailList.push(sectionObj);
    
            });
          }
          else{
            let sectionObj = new Section();
            sectionObj.ChapterID = null;
            sectionObj.SectionID = null;
            sectionObj.title = null;
            sectionObj.Description = null;
            sectionObj.chapter= this.chapter;
            sectionObj.course=this.course;
    
            this.SectionDetailList.push(sectionObj);
          }
             
        
        });


        }); 
    
    })

   console.log("sectionslist:" ,this.SectionDetailList);



  }
}
