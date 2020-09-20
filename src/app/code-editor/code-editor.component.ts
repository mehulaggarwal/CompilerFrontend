import { Component, OnInit, ElementRef,Input,EventEmitter, Output } from '@angular/core';
import { CompilerService } from '../compiler.service';
import { CompilerInput } from '../model/CompilerInput';
import { CodeOutput } from '../model/CodeOutput';
import 'codemirror/mode/clike/clike';
import 'codemirror/lib/codemirror.css'
import 'codemirror/lib/codemirror.js'
import 'codemirror/mode/cobol/cobol'
declare function  mymethod(): any;
@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})

export class CodeEditorComponent implements OnInit {

  config;
  code : string;
  output:string;
  outputObject: CodeOutput= new Output();
  show: boolean = false;
  clicked:boolean = false;
  input:string;
  commandLineArguments:string;
  constructor(public elRef: ElementRef,private compilerService : CompilerService) { 
    this.config = {
      // lineNumbers: true,
      // lineWrapping: true,
      // autoCloseBrackets: true,
      // autoCloseTags:true,
      // matchBrackets:true,
      // enableCodeFolding:true,
      // styleActiveLine:true,
      // smartIndent:true,
      // theme:'monokai',
      // mode: { name: 'c' }
      lineNumbers: true,
    theme: 'eclipse',
    // mode: { name: 'clike' },
    mode : 'clike',
    autoCloseBrackets: true,
    autoCloseTags:true,
    smartIndent:true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    matchBrackets:true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
      // AUTOCOMPLATE
      // hintOptions: {hint: this.synonyms},
     
    };

    this.code ="#include<stdio.h>\nint main(){int i;\nscanf(\"%d\",&i);\nprintf(\"5\");\nprintf(\"%d\",i);}";
    //this.code = "function hello() {\n  console.log('hello world!');\n}";
  }

  
  compilerInput: CompilerInput = new CompilerInput() ;
  language:string;

  ngOnInit(): void {
    mymethod();
    this.compilerService.currentMessage.subscribe(message=> this.message = this.code)
  }

  newMessage(){ 
    this.compilerService.changeMessage(this.code);
  }

  onTab(event){
    console.log("tab event occured");
    console.log(event);
    event.preventDefault();
    var s = event.target.selectionStart;
    event.target.value = event.target.value.substring(0,event.target.selectionStart) + "\t" + event.target.value.substring(event.target.selectionEnd);
    event.target.selectionEnd = s+1; 
  }
  
  message: string ;

  onClick(){
    this.compilerInput.code=this.code;
    this.compilerInput.input= this.input;
    this.compilerService.language.subscribe(languageName=>{
      this.language = languageName;
    })
    this.clicked = true;
    this.compilerInput.language = this.language;
    this.compilerInput.commandLineArguments = this.commandLineArguments;
    console.log(this.compilerInput.code);
    this.compilerService.compile(this.compilerInput).subscribe(
      (response)=>{
        console.log("returned data");
        this.outputObject.output=response.output;
        this.outputObject.error=response.error;
        this.outputObject.hasError=response.hasError;
        this.outputObject.executionTime = response.executionTime;
       // let d = data.body.json();
        console.log(response);
        this.show=true;
      }
    )
    this.clicked = false;
  }

  empty(){
    if(this.output){
      return false;
    }
    return true;
  }
  
}