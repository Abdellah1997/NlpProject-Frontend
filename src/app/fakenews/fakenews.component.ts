import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fakenews',
  templateUrl: './fakenews.component.html',
  styleUrls: ['./fakenews.component.scss']
})
export class FakenewsComponent implements OnInit {

  text: string; 

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
  }

  onSubmit(data){
    let text: string = data;
    this.http.post('http://127.0.0.1:5000/fakeNews',text)
    .subscribe((response:any)=>{
      console.log(response);
    },
    (error)=> {
      this.text = (error.error && error.error.text) ? error.error.text : "";
      if (this.text == 'real') {
        this.text = 'حقيقية';
      }
      else{
        this.text = 'مزيف';
      }
    });
    console.log(data);
  }

}
