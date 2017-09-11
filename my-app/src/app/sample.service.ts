import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class SampleService {
    constructor(private http: Http) {

    }
    addSamples(samples) {
        console.log("service calls");
        return this.http.post("https://jsonplaceholder.typicode.com/posts", samples)
        .map((response)=>response.json());

    }
}

