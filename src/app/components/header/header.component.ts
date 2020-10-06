import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  destroy$:Subject<void> = new Subject<void>()

  id: string;

  @Input() titulo1 = ""
  @Input() titulo2 = ""
  @Input() titulo3 = ""
  @Input() titulo4 = ""

  bodyText: string;

  constructor(private modalService: ModalService,private CartService:CartService) { }
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  ngOnInit() {
      this.bodyText = 'This text can be updated in modal 1';
      this.CartService.cartUpdate$.pipe(takeUntil(this.destroy$)).subscribe((observable) => {console.log(observable)})
  }

  openModal(id: string) {
      this.modalService.open(id);
      this.CartService.getCart()
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}

