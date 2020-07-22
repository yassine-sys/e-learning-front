import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'app/user/user.model';
import { NgForm } from '@angular/forms';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { data } from 'jquery';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private dialogConfig;

  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //passwordpattern = "^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^0-9]*[0-9]).{6,30}$";
  rootUrl = 'https://localhost:44352';
  constructor(private http: HttpClient
    ,private userservice:UserService
    ,private router: Router
    ,private route:ActivatedRoute
    ,private dialog: MatDialog) { }
  users: string[]; 
  user:User
  public DepartmentID
  //roles : any[];

  ngOnInit() {
    this.userlist()
    this.DepartmentID=this.route.snapshot.paramMap.get('id');
    console.log(this.DepartmentID)
    this.resetForm();
    /*this.userservice.getAllRoles().subscribe((data : any)=>{
      data.forEach(obj => obj.selected = false);
      this.roles = data;
    }
  );*/
   
  }
  /*updateSelectedRoles(index) {
    this.roles[index].selected = !this.roles[index].selected;
  }*/

userlist(){
  this.http.get('https://localhost:44352/api/Account/users').subscribe(  
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
   // Username:'',
    Email:'',
    //FirstName:'',
    //LastName:'',
    Password:'',
    ConfirmPassword:'',
    DepartmentID:this.DepartmentID
  }
  /*if (this.roles)
  this.roles.map(x => x.selected = false);*/
  
  
}

  onSubmit(form:NgForm){

   // var x = this.roles.filter(x => x.selected).map(y => y.Name);

    this.userservice.registerUser(form.value).subscribe((res:any)=>{
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

       this.user=res;
      this.resetForm(form)


    

    
      })

   // this.router.navigate(["mail"])
    
  }

  
  userAuthentication(userName,password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }
  getUserClaims(){
    return  this.http.get(this.rootUrl+'/api/Account/GetUserClaims');
   }
    
  

}


