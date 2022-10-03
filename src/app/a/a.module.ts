import { AComponent } from './a.component';
import { A_ROUTES } from './a.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forChild(A_ROUTES)
    ],
    declarations: [AComponent]
})
export class ATestModule {}
