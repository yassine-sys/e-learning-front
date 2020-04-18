import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Option from 'app/shared/models/Option';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from 'app/shared/api/repository.service';


@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent implements OnInit {

  public displayedColumns = ['OptionText', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Option>();
  public errorMessage: string = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;

  constructor( private repository: RepositoryService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }


  id : string = this.activeRoute.snapshot.paramMap.get('QuesID');

  ngOnInit() {

    console.log(this.id);
    
    this.repository.getOptionsByQuesID(this.id).subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(result);
    })

  }

public redirectToUpdatePage (id : any) {

let updateUrl: string = `option/update/${this.id}/update/${id}`; 
this.router.navigate([updateUrl]);
}

public redirectToDeletePage (id : any) {
let deleteUrl: string = `option/delete/${this.id}/delete/${id}`;
this.router.navigate([deleteUrl]);
}

public redirectToCreateOption() {

let cearteOptionUrl: string = `create-option/${this.id}`;
this.router.navigate([cearteOptionUrl]);

}


public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

}
