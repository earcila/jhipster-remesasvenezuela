import { NgModule } from '@angular/core';

import { RemesasvenezuelaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [RemesasvenezuelaSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [RemesasvenezuelaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RemesasvenezuelaSharedCommonModule {}
