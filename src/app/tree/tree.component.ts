import { Component, OnInit } from '@angular/core';
import { GrupoService } from './../Services/grupo.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styles: []
})
export class TreeComponent implements OnInit {

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
    var tree = [];

    //Set root
    const root = this.getFiltered(this.table, { idPai: null } );
    tree.push({id: root[0].idProdutoGrupo, name: root[0].Grupo});

    //Add children
    this.addChildren(tree[0])

    console.log(JSON.stringify(tree));
  }

  addChildren(node){
    let children = this.getFiltered( this.table, { idPai: node.id } );
    if (children) {
      node.children = children.map( n => {
        let c = {
          id: n.idProdutoGrupo,
          name: n.Grupo
        }
        this.addChildren(c);
        return c;
      });
    }
  }

  getFiltered(data, filter){
    let node = data.filter(function (item: any)
    {
      for (var key in filter)
      {
        if (item[key] === undefined || item[key] != filter[key])
        return false;
      }
      return true;
    });
    return node;
  }

}