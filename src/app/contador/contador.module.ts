import { NgModule} from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    // Cosas publicas
    exports: [
        ContadorComponent
    ],
    imports: [

    ]
})
export class ContadorModule{}