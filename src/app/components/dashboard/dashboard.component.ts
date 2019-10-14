import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginService} from '../../services/login.service';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  ChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];
  labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Oct','Nov','Dec'];
  labels2 = ['','','','','','','','','',''];
  dataset = [{data: [20,10,11,23,40,60,12,65,80,11,45,32], label: 'Questions'},
          {data: [20,10,11,23,40,60,12,65,80,11,45,32], label: 'Answers'}];
  dataset2 = [{data: [20,10,11,23,40,60,12,65,80,11,45,32], label: 'Questions'}];
  //dataset = [{data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Questions'},{data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Answers'}];
  
  
  
  public questionChart = {
    datasets: this.dataset,
    labels: this.labels,
    options: {responsive: true},
    colors: this.ChartColors,
    legend: true,
    chartType: 'line'
  };

  public mostVotedChart = {
    datasets: this.dataset2,
    labels: this.labels2,
    options: {responsive: true},
    colors: this.ChartColors,
    legend: true,
    chartType: 'bar'
  };

  constructor(private loginService: LoginService, private http:HttpClient) {
    
    //first graph
    //questions part 
    let year = new Date().getFullYear();
    let baseArray = [0,0,0,0,0,0,0,0,0,0,0,0];
    let url = `${environment.base_url}content/q/sqpm/${year}`;
    this.http.get(url).subscribe((data:any) =>{
      for(var i=0; i< data.length; i++){
        baseArray[data[i]['month']] = data[i]['count'];
      }
      this.dataset[0]['data'] =baseArray;
    });

    //answers part
    let baseArray2 = [0,0,0,0,0,0,0,0,0,0,0,0];
    let url2 = `${environment.base_url}post/a/sapm/${year}`;
    this.http.get(url2).subscribe((data2:any) =>{
      for(var i=0; i< data2.length; i++){
        baseArray2[data2[i]['month']] = data2[i]['count'];
      }
      this.dataset[1]['data'] =baseArray2;
      //this.dataset[1] = {data: baseArray2, label: 'Answers'};
    });
    //end first graph

    //second graph
    let url3 = `${environment.base_url}content/q/sttvq`;
    this.http.get(url3).subscribe((data:any) =>{
      let values =[];
      let labels = [];
      for(let i =0; i< data.length; i++){
        values.push(data[i]['count']);
        //labels.push(data[i]['qid']);
        labels.push('Q'+data[i]['qid']);
      }
      this.mostVotedChart.labels = labels;
      this.mostVotedChart.datasets = [{data: values,label:'Most Voted'}];
    });

  }

  ngOnInit() {



  }
  getFistDashboardData(){
    //questions part 
    let year = new Date().getFullYear();
    let baseArray = [0,0,0,0,0,0,0,0,0,0,0,0];
    let url = `${environment.base_url}content/q/sqpm/${year}`;
    this.http.get(url).subscribe((data:any) =>{
      for(var i=0; i< data.length; i++){
        baseArray[data[i]['month']] = data[i]['count'];
      }
    });
    this.dataset.push({data: baseArray, label: 'Questions'});

    //answers part
    baseArray = [0,0,0,0,0,0,0,0,0,0,0,0];
    let url2 = `${environment.base_url}post/a/sapm/${year}`;
    this.http.get(url2).subscribe((data:any) =>{
      for(var i=0; i< data.length; i++){
        baseArray[data[i]['month']] = data[i]['count'];
      }
    });
    this.dataset.push({data: baseArray, label: 'Answers'});
  }

}
