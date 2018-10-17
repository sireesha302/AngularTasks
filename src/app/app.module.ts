import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import {FormsModule,FormArray,ReactiveFormsModule} from '@angular/forms'
import {MatPaginatorModule,MatToolbarModule,MatProgressSpinnerModule,MatSliderModule,MatTabsModule,MatDialogModule,MatGridListModule,MatExpansionModule,MatSelectModule,MatButtonModule,MatInputModule,MatAutocompleteModule,MatFormFieldModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule}  from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule ,
    MatFormFieldModule ,
   MatNativeDateModule,
   MatExpansionModule,
   MatRadioModule,
   MatGridListModule,
   MatDialogModule,
   BrowserAnimationsModule,
   MatDatepickerModule ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DialogOverviewExampleDialog , AppComponent]
})
export class AppModule { }
