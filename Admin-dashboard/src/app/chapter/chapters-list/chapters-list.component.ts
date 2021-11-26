import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { Observable } from 'rxjs';
import { Chapter } from './chapter.model';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.css']
})
export class ChaptersListComponent implements OnInit {
  /*ChapterList=[];
  courseID = "" ;
  ChapterDetailList:Array<Chapter>=[];
  course:[];
  section : [];*/
  public CourseId;
  private dialogConfig;
  chapter:Chapter
  test=new Chapter()
  chapters:any=[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private chapterService:ChapterService,
    private http:HttpClient
    ,private dialog: MatDialog

    /*,private courseService:CourseService,private sectionService:SectionService*/) { }

  ngOnInit(): void {
    this.CourseId=this.route.snapshot.paramMap.get('id');
    console.log(this.CourseId)
    this.resetForm()
    this.list()

   /* this.courseID = this.route.snapshot.paramMap.get('id');
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
    })*/

  }
  resetForm(form?:NgForm){
    if (form!=null)
    form.reset();
    this.chapter={
      Id:0,
      title:'',
      Description:''
    }
  }

  isShow=true;
  id:number;
  toggledisplay(id){
    this.isShow=!this.isShow;
    this.id=id;
  }

  onSubmit(form:NgForm,CourseId:any){
    this.chapterService.addChapter(form.value,this.CourseId).subscribe((res:any)=>{
      this.chapter=res;
      console.log("test");
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      this.resetForm(form);
      this.list()


    })
   // this.router.navigate(['/business-unit-list'])



  }

  chapterlist(CourseId:any): Observable<Array<Chapter>>{
    return this.http.get<Array<Chapter>>('https://localhost:44352/api/chapter/course/'+CourseId)

  }
  list(){
    this.chapterlist(this.CourseId).subscribe((data: any) => {
      this.chapters=data
      console.log(data);
    });

  }

  onDelete(ChapterId:any){
    this.chapterService.onDelete(ChapterId).subscribe(res=>
      {
        this.chapters=res;
        //let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        this.list();

        
      }
      )  
  }
    

}
