import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Button } from 'protractor';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import { CheckBoxDemoComponent } from './check-box-demo/check-box-demo.component';
//datetimepicker
import { DatepickerDemoComponent } from './datepicker-demo/datepicker-demo.component'
import { FormFieldDemoComponent } from './form-field-demo/form-field-demo.component'
import { MenuDemoComponent } from './menu-demo/menu-demo.component'

const routes: Routes = [
  { path: 'Button', component: ButtonComponent },
  { path: 'Select', component: SelectComponent },
  { path: 'Autocomplete-demo', component: AutocompleteDemoComponent },
  { path: 'check-Box-Demo', component: CheckBoxDemoComponent },
  { path: 'datepicker-demo', component: DatepickerDemoComponent },
  { path: 'form-field-demo', component: FormFieldDemoComponent },
  { path: 'menu-demo', component: MenuDemoComponent },
  { path: '',
    redirectTo: '/Button',
    pathMatch: 'full'
  },
  { path: '**', component: ButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
