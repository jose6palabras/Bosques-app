import {NgModule} from '@angular/core'

import {MatButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatSelectModule, MatInputModule, MatCardModule, MatIconModule} from '@angular/material'

@NgModule({
    imports:[MatButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatSelectModule, MatInputModule, MatCardModule, MatIconModule],
    exports:[MatButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatSelectModule, MatInputModule, MatCardModule, MatIconModule]
})

export class MaterialModule {}