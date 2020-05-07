import { Component, OnInit } from '@angular/core';
import { BasesService} from '../../services/bases.service'
import { Base } from 'src/app/models/base';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  constructor( private basesService: BasesService) { }
  bases: any = [];
  filterList='';
  filterArea='';
  filterTipo='';

 
  
  ngOnInit(): void {
    
    this.basesService.getBases().subscribe(
      res => {
        this.bases = res;

      },
      
      err => console.log(err)
    );
  }

  listaTipo(arg){
    this.basesService.getBasesTipo(arg).subscribe(
      res => {
        this.bases = res;

      },
      
      err => console.log(err)
    );
  
}

 
}
