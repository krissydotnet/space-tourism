import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberedTitleComponent } from './numbered-title/numbered-title.component';
import { PadZeroPipe } from './pad-zero.pipe';



@NgModule({
  declarations: [
    NumberedTitleComponent,
    PadZeroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberedTitleComponent,
    PadZeroPipe
  ]
})
export class SharedModule { }
