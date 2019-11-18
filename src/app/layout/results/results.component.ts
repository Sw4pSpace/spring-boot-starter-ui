import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../core/service/auth.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: any = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.loadResults();
  }

  loadResults() {
    this.http.get('http://localhost:8080/quiz/scores/' + this.authService.currentUser.id).subscribe(data => {
      this.results = data;
    });
  }

}
