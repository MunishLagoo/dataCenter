import { Component, Input } from '@angular/core';
import { NodesDetailComponent } from '../nodes-detail/nodes-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent {
@Input() node: any;

constructor (private modalService: NgbModal){}

isDanger(prop) {
  return this.node[prop].used / this.node[prop].available > 0.7;
}
 
open(node) {
  const modal = this.modalService.open(NodesDetailComponent);
  modal.componentInstance.node = node;
}

}
