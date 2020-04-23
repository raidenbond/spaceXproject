import { Component, OnInit, Output ,Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Output() dataEmitter: EventEmitter<any> = new EventEmitter<any>();
  dataForParent = 'For our Professor....';
  
  emittingFunction(){
    this.dataEmitter.emit(this.dataForParent);
  }

  ngOnInit() {

    this.emittingFunction();

  }

}
