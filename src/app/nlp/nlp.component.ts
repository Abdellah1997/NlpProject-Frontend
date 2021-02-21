import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nlp',
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.scss']
})
export class NlpComponent implements OnInit {

  docs: string; 

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
  }

  onSubmit(data){
    let docs: string = data;
    this.http.post('http://127.0.0.1:5000/nlp',docs)
    .subscribe((response:any)=>{
      console.log(response);
      this.docs = response;
    },
    (error)=> {
      this.docs = (error.error && error.error.docs) ? error.error.docs : "";
    });
    console.log(data);
  }
}
