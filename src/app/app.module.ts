import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { EmptyComponent } from './empty/empty.component';
import { CComponent } from './c/c.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'angulartest/a', component: AComponent },
      { path: 'angulartest/b', component: BComponent },
      { path: 'angulartest/c', component: CComponent },

      // To prevent issues when routing to other micro frontends
      // a catch-all route should be defined
      { path: '**', component: EmptyComponent },

    ])
  ],
  declarations: [
    AComponent,
    BComponent,
    CComponent,
    AppComponent,
    EmptyComponent
  ],
  exports: [
    AComponent,
    BComponent,
    CComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  public ngDoBootstrap(): void {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angulartest-element', ce);

    customElements.define('angulartest-a-element', createCustomElement(AComponent, {injector: this.injector}));
    customElements.define('angulartest-b-element', createCustomElement(BComponent, {injector: this.injector}));
    customElements.define('angulartest-c-element', createCustomElement(CComponent, {injector: this.injector}));
  }

}
