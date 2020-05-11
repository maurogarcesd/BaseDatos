import { Component, OnInit } from '@angular/core';
import { BasesService } from '../../services/bases.service'
import { Base } from 'src/app/models/base';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private basesService: BasesService) { }
  bases: any = [];
  filterList = '';
  filterTipo = '';
  listTipos = ["Base de Datos", "Revista individual", "Libros electrónicos"];
  listAreas= ["Bibliotecología y archivistíca","Ciencias económicas y administrativas","Ciencias naturales y exactas","Ciencias químicas","Ciencias de la Salud","Ciencias sociales y humanas","Derecho y ciencias jurídicas","Educación","Ingeniería y tecnología","Multidisciplinarias","Normas técnicas","Psicología"];
  filterListTipo: any = [];
  


  ngOnInit(): void {

    this.basesService.getBases().subscribe(
      res => {

        this.bases = res;
        this.listaTipos("");
        this.listaAreas("");
      },

      err => console.log(err)
    );

  }

  listaTipos(value) {
    this.filterListTipo = this.bases
    if (value) {
      value = value.toLowerCase()
      this.filterListTipo = _.filter(this.bases, (base) => {
        return _.includes(base.TIPO_RECURSO.toLowerCase(), value)
      })
    }
  }

  listaAreas(value) {
    this.filterListTipo = this.bases
   // console.log('hola',this.filterListTipo)
    if (value) {
      value = value.toLowerCase()
      this.filterListTipo = _.filter(this.bases, (base) => {
        return _.includes(base.AREA_ACADEMICA.toLowerCase(), value)
        
      })
     // console.log(this.filterListTipo)
    }
  }


}
