import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styles: []
})
export class TreeComponent implements OnInit {

  tree: CNode[];

  constructor() { }

  ngOnInit() {
  }

  generateData(){

    //Get all data on a tabular format
    
    //Init tree
    this.tree = [];

    //Set root
    const root: CNode = {id: 1, name:'root'};
    this.tree.push(root);

    //Set 
    console.log(this.tree);
  }
}

export class CNode {
  id: number;
  name: string;
  children: CNode[];
}