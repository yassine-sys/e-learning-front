import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordpattern = "^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^0-9]*[0-9]).{6,30}$";

  constructor(private http: HttpClient,private userservice:UserService,private router: Router,private route:ActivatedRoute) { }
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
       this.user=res;
      this.userlist()
      this.resetForm(form)


    

    
      })

    
    
  }
  onDelete(Id:any){
    this.userservice.onDelete(Id).subscribe(res=>{
      res=this.user
      this.userlist()
    }) 
   }

}


