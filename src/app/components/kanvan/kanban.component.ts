import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { Tarea } from '../tarea';

@Component({
    selector: 'app-kanban',
    templateUrl : './Kanban.component.html',
    styleUrls: ['./Kanban.component.css']
})

export class KanbanComponent {

  urlplaceholder = 'assets/img/user.png';

    Tarea1 = new Tarea ('Hacer un canvan', 'Lucian', this.urlplaceholder, ['terminada', 'funcional']);
    Tarea2 = new Tarea ('Hacer varias tareas', 'Lucian', this.urlplaceholder, ['terminada', 'funcional']);
    Tarea3 = new Tarea ('Añadir funcionalidad', 'Lucian', this.urlplaceholder, ['terminada', 'funcional']);
    Tarea4 = new Tarea ('opcional : crear nuevas tareas ', 'Lucian', this.urlplaceholder, ['terminada', 'funcional']);
    // tslint:disable-next-line: max-line-length
    Tarea5 = new Tarea ('Añadir mas parametros a las tareas y mejorar el diseño', 'Lucian', this.urlplaceholder, ['en progreso', 'sin errores']);


    preinbox = [];
    inbox = [];
    iniciadas = [this.Tarea5];
    finalizadas = [this.Tarea1, this.Tarea2, this.Tarea3, this.Tarea4];


    descripcionimput: string;
    nombreimput: string;
    imgimput: string;

// esta funcion añade una nueva tarea
    add() {
      console.log(this.imgimput);
      if (this.descripcionimput === undefined || this.descripcionimput === '' || this.descripcionimput === null){
        alert('debes especificar la descripcion de la tarea ');
      }
      else{

        if (this.nombreimput === undefined || this.nombreimput === '' || this.nombreimput === null){
          this.nombreimput = 'no asignado';
        }
        const tarea = new Tarea (this.descripcionimput, this.nombreimput, this.urlplaceholder, ['sin tag']);

        this.preinbox.push(tarea);
      }
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
        console.log('preinbox : ' + this.preinbox.length);
        console.log('inbox : ' + this.inbox.length);
        console.log('iniciadas : ' + this.iniciadas.length);
        console.log('finalizadas : ' + this.finalizadas.length);
        console.log('---------------------------------');
      }

    }





