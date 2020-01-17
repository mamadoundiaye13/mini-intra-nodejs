import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';



@NgModule({
  imports: [ CommonModule, MatIconModule, MatToolbarModule ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  providers: []
})
export class HeaderModule {}
