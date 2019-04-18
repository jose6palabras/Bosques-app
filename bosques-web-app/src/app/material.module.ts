import {NgModule} from '@angular/core'

import {MatButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatSelectModule, MatInputModule, MatCardModule} from '@angular/material'

@NgModule({
    imports:[MatButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatSelectModule, MatInputModule, MatCardModule],
    exports:[MatButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatSelectModule, MatInputModule, MatCardModule]
})

export class MaterialModule {}