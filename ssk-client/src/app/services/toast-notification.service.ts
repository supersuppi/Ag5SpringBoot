import {Injectable,ViewContainerRef} from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastNotificationService {

    constructor(private toastr: ToastsManager, private toastOpts: ToastOptions) {
        this.toastOpts.toastLife = 3000;
        this.toastOpts.positionClass = 'toast-top-center';
        this.toastOpts.showCloseButton = true;
    }
  
    showSuccess(msg:string) {
        this.toastr.success(msg);
      }
    
    showError(msg:string) {
        this.toastr.error(msg);
      }
    
    showWarning(msg:string) {
        this.toastr.warning(msg);
      }
    
    showInfo(msg:string) {
        this.toastr.info(msg);
      }
 
}