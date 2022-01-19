import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsExpComponent } from './events-exp/events-exp.component';
import { FunctionExampleComponent } from './function-example/function-example.component';
import { GetInputValueExpComponent } from './get-input-value-exp/get-input-value-exp.component';
import { CounterExpComponent } from './counter-exp/counter-exp.component';
import { ComponentStyleExpComponent } from './component-style-exp/component-style-exp.component';
import { GlobalComponentStyleExpComponent } from './global-component-style-exp/global-component-style-exp.component';
import { PropertyBindingExpComponent } from './property-binding-exp/property-binding-exp.component';
import { IfElseExpComponent } from './if-else-exp/if-else-exp.component';
import { SwitchCaseExpComponent } from './switch-case-exp/switch-case-exp.component';
import { ForLoopExpComponent } from './for-loop-exp/for-loop-exp.component';
import { StyleBindingExpComponent } from './style-binding-exp/style-binding-exp.component';
import { HeaderExpComponent } from './header-exp/header-exp.component';
import { SimpleFormExpComponent } from './simple-form-exp/simple-form-exp.component';
import { FormsModule } from '@angular/forms';
import { ToggleElementExpComponent } from './toggle-element-exp/toggle-element-exp.component';
import { BootstrapExpComponent } from './bootstrap-exp/bootstrap-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsExpComponent,
    FunctionExampleComponent,
    GetInputValueExpComponent,
    CounterExpComponent,
    ComponentStyleExpComponent,
    GlobalComponentStyleExpComponent,
    PropertyBindingExpComponent,
    IfElseExpComponent,
    SwitchCaseExpComponent,
    ForLoopExpComponent,
    StyleBindingExpComponent,
    HeaderExpComponent,
    SimpleFormExpComponent,
    ToggleElementExpComponent,
    BootstrapExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
