import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

form: FormGroup;
enviado=false;

constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) {
  this.form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
}
get email() {
  return this.form.get('email')  as FormControl;
}
get password() {
  return this.form.get('password') as FormControl;
}


iniciarsession(){
  const url = 'http://127.0.0.1:8000/api/user/registro';

  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  const body = new URLSearchParams();
  body.set('email', this.form.value.email);
  body.set('password', this.form.value.password);
  this.http.post<any>(url, body.toString(), { headers }).subscribe(
    response => {
      if (response && response.status && response.status >= 400) {
        alert(`Se produjo un error: ${response.statusText}`);
      } else {
        this.enviado = true;
        alert('has iniciado session');
      }
    },
 
  );

}



}
