import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapExpComponent } from './bootstrap-exp/bootstrap-exp.component';
import { TodoListExpComponent } from './todo-list-exp/todo-list-exp.component';
import { ChildComponentExpComponent } from './child-component-exp/child-component-exp.component';
import { ReusableComponentExpComponent } from './reusable-component-exp/reusable-component-exp.component';
import { TwoWayBindingExpComponent } from './two-way-binding-exp/two-way-binding-exp.component';
import { TemplateReferenceVariableExpComponent } from './template-reference-variable-exp/template-reference-variable-exp.component';
import { BasicsTypescriptExpComponent } from './basics-typescript-exp/basics-typescript-exp.component';
import { PipesExpComponent } from './pipes-exp/pipes-exp.component';
import { UsdtoinrPipe } from './pipes/usdtoinr.pipe';
import { TemplateDrivenFormExpComponent } from './template-driven-form-exp/template-driven-form-exp.component';
import { ReactiveFormExpComponent } from './reactive-form-exp/reactive-form-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapExpComponent,
    TodoListExpComponent,
    ChildComponentExpComponent,
    ReusableComponentExpComponent,
    TwoWayBindingExpComponent,
    TemplateReferenceVariableExpComponent,
    BasicsTypescriptExpComponent,
    PipesExpComponent,
    UsdtoinrPipe,
    TemplateDrivenFormExpComponent,
    ReactiveFormExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
