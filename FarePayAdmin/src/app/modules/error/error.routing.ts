import { FiveHundredComponent } from './page/five-hundred/five-hundred.component';
import { FourOhFourComponent } from './page/four-oh-four/four-oh-four.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'page-not-found',
        component: FourOhFourComponent
    },
    {
        path: 'server-error',
        component: FiveHundredComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErroreRoutingModule { }
