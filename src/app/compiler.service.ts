import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CompilerInput } from './model/CompilerInput';
import {CodeOutput} from './model/CodeOutput';
@Injectable()
export class CompilerService{
    
    constructor(private http: HttpClient) {
    }
    private baseUrl: string = 'http://localhost:8080';
    private executeUrl : string = this.baseUrl +"/execute";

    private messageSource = new BehaviorSubject<string>("Default message");
    private languageSource = new BehaviorSubject<string>("C");

    currentMessage = this.messageSource.asObservable();
    language = this.languageSource.asObservable();
    
    changeMessage(code : string){
        this.messageSource.next(code);
    }

    changeLanguage(languageName: string){
        this.languageSource.next(languageName);
    }

    compile(compilerInput:CompilerInput):Observable<CodeOutput>{
        console.log(this.executeUrl);
        console.log(compilerInput.code)
        return this.http.post<CodeOutput>(this.executeUrl,compilerInput);
    }
}