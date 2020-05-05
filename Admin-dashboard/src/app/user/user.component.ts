import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private dialogConfig;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordpattern = "^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^0-9]*[0-9]).{6,30}$";

  constructor(private http: HttpClient
    ,private userservice:UserService
    ,private router: Router
    ,private route:ActivatedRoute
    ,private dialog: MatDialog) { }
  users: string[]; 
  user:User
  public DepartmentID

  displayedColumns: string[] = ['Id', 'FirstName', 'LastName','Email','UserName','onDelete'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.DepartmentID=this.route.snapshot.paramMap.get('id');
    console.log(this.DepartmentID)
    this.resetForm();
    this.list()

  }
/*userlist(){
  this.http.get('https://localhost:44306/api/Account/users').subscribe(  
      data => {  
       this.users = data as string [];  
      }  
    );  

}*/
resetForm(form?:NgForm){
  if(form!=null)
  form.reset();
  this.user= {
    Id:'',
    Username:'',
    Email:'',
    FirstName:'',
    LastName:'',
    Password:'',
    ConfirmPassword:'',
    DepartmentID:this.DepartmentID
  }
}

  onSubmit(form:NgForm){

    this.userservice.registerUser(form.value).subscribe((res:any)=>{
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

       this.user=res;
      this.resetForm(form)


    

    
      })

    this.router.navigate(["user-list"])
    
  }

  userlist(): Observable<Array<User>>{
    return this.http.get<Array<User>>('https://localhost:44306/api/UserByDepartment/'+this.DepartmentID)
      /* data=>{
         this.departments=data as string [];
         console.log(data)
 
       }
     );*/
   }
   list(){
     this.userlist().subscribe((data: any) => {
       this.dataSource.data = data as User[];
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
       console.log(data);
     });
    }
  

}


