import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    PipesExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
