import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CreateESVSComponent } from './create-esvs/create-esvs.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { DemoComponent } from './demo/demo.component';
import { ExportImportComponent } from './export-import/export-import.component';
import { HdphoneticketComponent } from './hdphoneticket/hdphoneticket.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { ParamsComponent } from './params/params.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveTableComponent } from './reactive-table/reactive-table.component';
import { SearchingComponent } from './searching/searching.component';
import { SelectionValueComponent } from './selection-value/selection-value.component';
import { SortingComponent } from './sorting/sorting.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { StoreComponent } from './store/store.component';
import { ViewComponent } from './view/view.component';
import { StylesCssComponent } from './styles-css/styles-css.component';
import { ValidationsFormsComponent } from './validations-forms/validations-forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: DemoComponent },
      { path: 'view', component: ViewComponent, },
      { path: 'esvs', component: CreateESVSComponent },
      { path: 'hdphone', component: HdphoneticketComponent },
      { path: 'table', component: CreateTableComponent },
      { path: 'split', component: SplitButtonComponent },
      { path: 'auto', component: AutocompleteComponent },
      { path: 'params', component: ParamsComponent },
      { path: 'search', component: SearchingComponent },
      { path: 'css', component: StylesCssComponent },
      // {
      //   path: 'reactive-forms', component: ReactiveFormsComponent,
      //   children: [
      //     { path: 'reactive-table', component: ReactiveTableComponent }
      //   ]
      // },
      { path: 'reactive-forms', component: ReactiveFormsComponent },
      { path: 'valid-form', component: ValidationsFormsComponent }

    ],
  },
  { path: 'reactive-table', component: ReactiveTableComponent },
  { path: 'import-export', component: ExportImportComponent },
  { path: 'sort', component: SortingComponent },
  { path: 'select', component: SelectionValueComponent },
  { path: 'store', component: StoreComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





