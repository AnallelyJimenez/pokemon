import { NgModule } from '@angular/core'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
