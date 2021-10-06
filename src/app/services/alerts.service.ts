import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Toast, ToastType } from '../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }
  private subject = new Subject<Toast>();
  private defaultId = 'defaultToast';

  onToast(id = this.defaultId): Observable<Toast> {
      return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  success(message: string, options?: any) {
      this.toast(new Toast({ ...options, type: ToastType.Success, message }));
  }

  error(message: string, options?: any) {
      this.toast(new Toast({ ...options, type: ToastType.Error, message }));
  }

  info(message: string, options?: any) {
      this.toast(new Toast({ ...options, type: ToastType.Info, message }));
  }

  warning(message: string, options?: any) {
      this.toast(new Toast({ ...options, type: ToastType.Warning, message }));
  }

  // main toast method    
  toast(toast: Toast) {
      toast.id = toast.id || this.defaultId;
      this.subject.next(toast);
  }

  // clear toasts
  clearToast(id = this.defaultId) {
      this.subject.next(new Toast({ id }));
  }
}