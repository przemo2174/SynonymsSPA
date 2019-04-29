import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppToastrService {

  constructor(private toastr: ToastrService) { }

  showError(message: string) {
    this.toastr.error(message, 'Error', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Success', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }

}
