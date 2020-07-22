import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'app/user/user.service';
import { User } from 'app/user/user.model';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'app/shared/dialogs/success-dialog/success-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  rootUrl = 'https://localhost:44352';
 
  private dialogConfig;


  constructor(private http: HttpClient
    ,private userservice:UserService
    ,private router: Router
    ,private route:ActivatedRoute
    ,private dialog: MatDialog) { }
    user: User
    public DepartmentID
  ngOnInit() {
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      Id: '',
      // Username:'',
      Email: '',
      //FirstName:'',
      //LastName:'',
      Password: '',
      ConfirmPassword: '',
      DepartmentID: this.DepartmentID
    }

  }
  onSubmit(form: NgForm) {
    this.userservice.registerUser(form.value).subscribe((res: any) => {
      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
      this.user = res;
      this.resetForm(form);
    }, err => {
      console.log(err);})
  }
}
