import { CartItemComponent } from './../cart-item/cart-item.component';
import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'jw-modal',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.css']
})
export class ModalCartComponent implements OnInit {

  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef ) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      if (!this.id) {
          console.error('modal must have an id');
          return;
      }

      document.body.appendChild(this.element);

      this.element.addEventListener('click', el => {
          if (el.target.className === 'jw-modal') {
              this.close();
          }
      });

      this.modalService.add(this);
  }

  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('jw-modal-open');
    
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('jw-modal-open');
  }
}

