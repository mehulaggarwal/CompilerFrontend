import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompilerService } from '../compiler.service';
import { CompilerInput } from '../model/CompilerInput';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name : string;  
  
  compilerInput: CompilerInput = new CompilerInput() ;

  constructor(private compilerService : CompilerService) { }

  
  ngOnInit(): void {
    //this.compilerInput = new CompilerInput();
    this.compilerService.currentMessage.subscribe(code => this.name = code);
  }


  onClick(){
    this.compilerInput.code=this.name;
    console.log(this.compilerInput.code);
    this.compilerService.compile(this.compilerInput).subscribe(
      data=>{
        console.log("returned data");
        console.log(data);  
      }
    )
  }
  message :string ;
  


}
