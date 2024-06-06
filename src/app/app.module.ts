import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { CardsComponent } from './cards/cards.component';
import { ViewComponent } from './view/view.component';
import { CreateESVSComponent } from './create-esvs/create-esvs.component';
import { LoginComponent } from './login/login.component';
import { StoreLookupComponent } from './store-lookup/store-lookup.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HdphoneticketComponent } from './hdphoneticket/hdphoneticket.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { StoreComponent } from './store/store.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { ExportImportComponent } from './export-import/export-import.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SortingComponent } from './sorting/sorting.component';
import { PaymentButtonComponent } from './payment-button/payment-button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { ParamsComponent } from './params/params.component';
import { SelectionValueComponent } from './selection-value/selection-value.component';
import { SearchingComponent } from './searching/searching.component';
import {MatSortModule} from '@angular/material/sort';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveTableComponent } from './reactive-table/reactive-table.component';
import { StylesCssComponent } from './styles-css/styles-css.component';
import { ValidationsFormsComponent } from './validations-forms/validations-forms.component';

@NgModule({
  declarations: [

    AppComponent,
    DemoComponent,
    HomeComponent,
    CardsComponent,
    ViewComponent,
    CreateESVSComponent,
    LoginComponent,
    StoreLookupComponent,
    HdphoneticketComponent,
    StoreComponent,
    AutocompleteComponent,
    CreateTableComponent,
    ExportImportComponent,
    SortingComponent,
    PaymentButtonComponent,
    SplitButtonComponent,
    ParamsComponent,
    SelectionValueComponent,
    SearchingComponent,
    ReactiveFormsComponent,
    ReactiveTableComponent,
    StylesCssComponent,
    ValidationsFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    LayoutModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatTreeModule,
    MatGridListModule,
    ScrollingModule,
    NgxDropzoneModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
