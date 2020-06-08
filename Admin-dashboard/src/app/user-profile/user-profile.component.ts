import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user/user.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'app/user/user.model';
import { NgForm } from '@angular/forms';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
  ngOnInit() {
    this.userlist()
    this.DepartmentID=this.route.snapshot.paramMap.get('id');
    console.log(this.DepartmentID)
    this.resetForm();
   
  }
userlist(){
  this.http.get('https://localhost:44306/api/Account/users').subscribe(  
      data => {  
       this.users = data as string [];  
      }  
    );  

}
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
  

}


