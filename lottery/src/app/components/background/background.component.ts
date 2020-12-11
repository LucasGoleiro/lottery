import { PlayComponent } from './../play/play.component';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(private modalService: NgbModal,
    config: NgbModalConfig) { 
      config.keyboard = false;
     }

  ngOnInit(): void {
  }

  openPlay() {
    this.modalService.open(PlayComponent);
  }

}
