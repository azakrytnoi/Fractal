import { Component, Input } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'spinner-component',
  template: `
    <div class="spinner-overlay" *ngIf="toggle">
      <div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  `,
  styles: [`
    .spinner-overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background: rgba(0, 0, 0, 0.25);
      margin: auto;
    }
 
    .spinner-overlay div {
      margin: auto;
      width: fit-content;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
 
    .spinner-overlay div i {
      font-size: 14em;
    }
  `]
})
export class SpinnerComponent {
  @Input() toggle: boolean;
}
