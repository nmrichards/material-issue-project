import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { DemoMaterialModule } from './demo-material-module';
import { MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule,
                    MatIconModule
                ],
                providers: [],
                bootstrap: [AppComponent]
            },] },
];
/**
 * @nocollapse
 */
AppModule.ctorParameters = () => [];
function AppModule_tsickle_Closure_declarations() {
    /** @type {?} */
    AppModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    AppModule.ctorParameters;
}
//# sourceMappingURL=app.module.js.map