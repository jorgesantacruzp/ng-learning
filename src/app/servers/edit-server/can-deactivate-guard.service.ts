import {Observable} from "rxjs/Observable";
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  // this method will be called by the angular router
  // once we try to leave a route
  // @param
  // nextState? (optional due to '?') -> where do you want to go
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot):
                Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
