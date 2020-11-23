import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ChoiceCitiesComponent } from './choice-cities/choice-cities.component';
import { DistanceComponent } from './choice-cities/distance/distance.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { DistanceService } from './choice-cities/distance.service';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceCitiesComponent,
    DistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    InputsModule,
    WavesModule,
    ButtonsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatSortModule,
  ],
  providers: [DistanceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ChoiceCitiesComponent],
})
export class AppModule { }
