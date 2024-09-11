import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabGuard implements CanActivate {
  validTabs = ['slot', 'mini-games', 'P2P', 'casino', 'poker']; // Example valid tabs

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const tab = route.paramMap.get('tab');
    if (this.validTabs.includes(tab as string)) {
      return true;
    } else {
      this.router.navigate(['/not-found']);
      return false;
    }
  }
}
