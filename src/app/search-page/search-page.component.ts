import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
@Component({
selector: 'app-search-page',
templateUrl: './search-page.component.html',
styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

constructor(private http: HttpClient) { }

ngOnInit() {
}

data = [];
configUrl = "";
onClickSubmit(data) {
    //this.htmlVariable ="";
    console.log(data.dissym);
    var disname;
    if(data.dissym== 0){
        this.configUrl = "http://192.168.50.137:8080/api/v1/search/by/symptoms/";
        disname={
            "symptoms" : data.disease.split(',') 
        };
    }
    else{
        this.configUrl = "http://192.168.50.137:8080/api/v1/search/by/disease/";
        disname={
            "name" : data.disease
        };
    }
        this.http.post(this.configUrl,
            disname).subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
            val);
            //this.data = val.hits.hits;
            if(val){
                console.log("POST call successful value returned in body", 
            val);
            console.log("POST call successful value returned in body", 
            val.hits.hits[0]);
            }
            else{
                //this.htmlVariable = "<span>No Data Found</span>";
            }
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
// return this.http.get(this.configUrl);
}

}