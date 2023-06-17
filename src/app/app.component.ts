import { Component } from '@angular/core';
import { Question } from './questions';
import { myquestions } from './myq';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userentered:boolean=false;
  score:number=0;
  intro()
{
 this.userentered=true;
 console.log('quiz started');
}
showinstructions:boolean=false;
showintro:boolean=true;
showquizinstr()
{
  this.showintro=false;
  this.showinstructions=true; 

}
next:boolean=false;
started:boolean=false;
startquiz()
{
  this.showinstructions=false;

 this.started=true;
 this.next=true;
 
}
questionindex:number=0;
selected:string='';
myq:myquestions[]=
[
  {
    question:'What is the full form of PHP?',
    options:['Hyper text markuplanguage','Hyper text preprocessors','preprocess hyper text'],
    answer:'Hyper text preprocessors'
  },
  {
    question:'Select the styling language in it?',
    options:['HTML','CSS','C'],
    answer:'CSS'
 
  },
  {
    question:' The most efficient data type for a variable that stores the letter C is the _______ data type ?',
    options:['Charcter','double','float'],
    answer:'Character'

  },
  {
    question:'Which is used to define the structure?',
    options:['HTML','CSS','C++'],
    answer:'HTML'

  },
  {
    question:'Which is used to define the structure?',
    options:['HTML','CSS','C++'],
    answer:'HTML'

  },
  {
    question:' A function that is called automatically each time an object is destroyed is a',
    options:['Constructor','Destructor','Terminator'],
    answer:'constructor'

  },
  
  {
    question:'In which of the following languages is function overloading not possible?',
    options:['C','Python','C++'],
    answer:'C'

  },
  
  {
    question:' Which refers to the process of locating and removing the errors in a program?',
    options:['Compiling','Analyzing','Debugging'],
    answer:'Debugging'

  },
  
  {
    question:'Which of the following are not standard header files in C?',
    options:['stdio.h','stdlib.h','studio.h'],
    answer:'studio.h'

  },
  
  {
    question:'What is the size of the int data type (in bytes) in C?',
    options:['4','2','6'],
    answer:'4'

  }
  
  
];
submitted:boolean=true;
nextq()
{

   if(this.selected==this.myq[this.questionindex].answer)
 {
  this.score+=10;
 }
 this.questionindex++;



}
finished:boolean=false;
submit()
{
  this.finished=true;
  this.submitted=false;
}
restart()
{  
  this.finished=false;;

  this.questionindex=0;
}
back()
{
  this.questionindex--;
}
}
