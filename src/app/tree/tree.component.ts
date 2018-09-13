import { Component, OnInit } from '@angular/core';
import { GrupoService } from './../Services/grupo.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styles: []
})
export class TreeComponent implements OnInit {

  tree: any[];
  table;

  constructor(private svcGrupo:GrupoService) { }

  ngOnInit() {
    
    this.svcGrupo.getAllGroups().subscribe(
      response => {
          this.table = response;
    });

  }

  generateData(){
    
    //Init tree
    this.tree = [];

    //Set root
    const root = this.getRoot();
    this.tree.push({id: root[0].idProdutoGrupo, name: root[0].Grupo});

    this.addChild(this.tree[0])

    console.log('** Result ** ');
    console.log(JSON.stringify(this.tree));
  }


  getRoot(){
    var filter: any = { idPai: null };
    let nodeRoot = this.table.filter(function (item: any)
    {
      for (var key in filter)
      {
        if (item[key] === undefined || item[key] != filter[key])
        return false;
      }
      return true;
    });
    return nodeRoot;
  }

  getChildren(idNode){
    var filter: any = { idPai: idNode };
    let nodeChildren = this.table.filter(function (item: any)
    {
      for (var key in filter)
      {
        if (item[key] === undefined || item[key] != filter[key])
        return false;
      }
      return true;
    });
    return nodeChildren;
  }


  addChild(node){
    let children = this.getChildren(node.id);
    if (children) {
      node.children = children.map( n => {
        let c = {
          id: n.idProdutoGrupo,
          name: n.Grupo
        }
        this.addChild(c);
        return c;
      });
    }
  }

}