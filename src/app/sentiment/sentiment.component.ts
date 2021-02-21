import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  text: string; 

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
  }

  onSubmit(data){
    let text: string = data;
    this.http.post('http://127.0.0.1:5000/sentiment',text)
    .subscribe((response:any)=>{
      console.log(response);
    },
    (error)=> {
      this.text = (error.error && error.error.text) ? error.error.text : "";
      if (this.text == 'Positive') {
        this.text = 'تعليق ايجابي';
      }
      else{
        this.text = 'تعليق سلبي';
      }
    });
    console.log(data);
  }
}
