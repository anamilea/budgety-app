import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatDialogModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatStepperModule} from '@angular/material';

let declarations =[MatButtonModule, MatIconModule, MatToolbarModule,
    MatFormFieldModule, MatInputModule, MatSidenavModule,
MatListModule, MatDialogModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatStepperModule];
@NgModule({
    imports: declarations,
    exports: declarations
})


export class MaterialModule {}