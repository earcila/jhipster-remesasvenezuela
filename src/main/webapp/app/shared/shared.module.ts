import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RemesasvenezuelaSharedLibsModule, RemesasvenezuelaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RemesasvenezuelaSharedLibsModule, RemesasvenezuelaSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [RemesasvenezuelaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RemesasvenezuelaSharedModule {
  static forRoot() {
    return {
      ngModule: RemesasvenezuelaSharedModule
    };
  }
}
