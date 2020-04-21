import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Option from 'app/shared/models/Option';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from 'app/shared/api/repository.service';

@Component({
  selector: 'app-exam-option-list',
  templateUrl: './exam-option-list.component.html',
  styleUrls: ['./exam-option-list.component.css']
})
export class ExamOptionListComponent implements OnInit {

  public displayedColumns = ['OptionText', 'values', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Option>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;

  constructor(
    private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }
  id : string = this.activeRoute.snapshot.paramMap.get('QuesID');
  
  /*public myquestion  : any = {
    QuesID : this.id }

  public message = [this.myquestion] ;*/
  
  ngOnInit() {

    //console.log(this.id);

    /*this.repository.SendMessage.subscribe( data => 
      { data = this.message[0];
        console.log('cc',data); 
       });
    
    this.repository.SendMessage.next(this.message);  */   

    this.repository.getOptionsByQuesID(this.id).subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    })

  }

public redirectToUpdatePage (id : any) {

let updateUrl: string = `exam/option/${this.id}/update/${id}`; 
this.router.navigate([updateUrl]);
}

public redirectToDeletePage (id : any) {
let deleteUrl: string = `exam/option/${this.id}/delete/${id}`;
this.router.navigate([deleteUrl]);
}

public redirectToCreateOption() {

let cearteOptionUrl: string = `exam/create-option/${this.id}`;
this.router.navigate([cearteOptionUrl]);
}

public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

}

