import { Component, OnInit } from '@angular/core';
import { CompilerService } from '../compiler.service';

@Component({
  selector: 'app-compiler-header',
  templateUrl: './compiler-header.component.html',
  styleUrls: ['./compiler-header.component.css']
})
export class CompilerHeaderComponent implements OnInit {

  constructor(private compilerService : CompilerService) { }

  ngOnInit(): void {
  }

  onChange(event){
    console.log(event.target.value);
    this.compilerService.changeLanguage(event.target.value);
  }
}
