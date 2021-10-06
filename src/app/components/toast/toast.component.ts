import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Toast, ToastType } from 'src/app/models/toast.model';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  @Input() id = 'defaultToast';
  @Input() fade = true;

  toasts: Toast[] = [];
  toastSubscription: any;
  routeSubscription: any;

  constructor(private router: Router, private alertService: AlertsService) {}

  ngOnInit() {
    this.toastSubscription = this.alertService
      .onToast(this.id)
      .subscribe((toast) => {
        if (!toast.message) {
          this.toasts = this.toasts.filter((x) => x.keepAfterRouteChange);
          this.toasts.forEach((x:any) => delete x.keepAfterRouteChange);
          return;
        }

        this.toasts.push(toast);
        if (toast.autoClose) {
          setTimeout(() => this.removeToast(toast), 3000);
        }
      });

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.alertService.clearToast(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeToast(toast: Toast) {
    if (!this.toasts.includes(toast)) return;

    if (this.fade) {
      this.toasts.find((x:any) => x === toast)!.fade = true;
      setTimeout(() => {
        this.toasts = this.toasts.filter((x) => x !== toast);
      }, 250);
    } else {
      this.toasts = this.toasts.filter((x) => x !== toast);
    }
  }

  iconClass(toast: Toast) {
    if (!toast) return;

    const iconClasses = [];

    const iconTypeClass = {
      [ToastType.Success]: 'fad fa-check-circle',
      [ToastType.Error]: 'fad fa-exclamation-circle',
      [ToastType.Info]: 'fas fa-info-circle',
      [ToastType.Warning]: 'fad fa-exclamation-triangle',
    };

    iconClasses.push(iconTypeClass[toast.type]);

    return iconClasses.join(' ');
  }

  cssClass(toast: Toast) {
    if (!toast) return;

    const classes = [];

    const toastTypeClass = {
      [ToastType.Success]: 'has-background-success',
      [ToastType.Error]: 'has-background-danger',
      [ToastType.Info]: 'has-background-info has-text-white',
      [ToastType.Warning]: 'has-background-warning',
    };

    classes.push(toastTypeClass[toast.type]);

    if (toast.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
