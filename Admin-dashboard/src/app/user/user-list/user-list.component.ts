import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private dialogConfig;
  userClaims: any;

  constructor(private http: HttpClient
    ,private userservice:UserService
    ,private router: Router
    ,private route:ActivatedRoute
    ,private dialog: MatDialog
    ) { }
  users: string[]; 
  user:User

  displayedColumns: string[] = ['Id', 'FirstName', 'LastName','Email','UserName','onDelete'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.list()
    this.userservice.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
    })
  }
  userlist(): Observable<Array<User>>{
   return this.http.get<Array<User>>('https://localhost:44306/api/Account/users')
  
  }
  list(){
    this.userlist().subscribe((data: any) => {
      this.dataSource.data = data as User[];
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
  }
  onDelete(Id:any){
   
    this.userservice.onDelete(Id).subscribe(res=>{
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

      res=this.user;
      this.list()
    }) 
   }

   Logout() {
    localStorage.removeItem('userToken');
  }

}
