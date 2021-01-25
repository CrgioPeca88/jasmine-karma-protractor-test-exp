// Dependencies
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Assets
import { SharedModule } from '@shared/shared.module';
import { Menu3RoutingModule } from '@menu3/menu3-routing.module';
import { Menu3ModifyComponent } from './modify/menu3-modify.component';
import { Menu3AddComponent } from './add/menu3-add.component';
import { Menu3ListComponent } from './list/menu3-list.component';
import { InfoMenu3CommonComponent } from './common/info_menu3/info-menu3-common.component';
import { Menu3Component } from './root/menu3.component';
import menu3ComponentTests from './root/menu3.component.spec';
import menu3ModifyComponentTests from './modify/menu3-modify.component.spec';
import menu3ListComponentTests from './list/menu3-list.component.spec';
import infoMenu3CommonComponentTests from './common/info_menu3/info-menu3-common.component.spec';
import menu3AddComponentTests from './add/menu3-add.component.spec';
import menu3DetailComponentTests from './detail/menu3-detail.component.spec';

describe('*[Menu3Module]: ----------------------------------------', () => {

	beforeEach(async(() => {
			TestBed.configureTestingModule({
					imports : [
						SharedModule,
						Menu3RoutingModule,
						RouterTestingModule
					],
					declarations: [
						Menu3ModifyComponent,
						Menu3AddComponent,
						Menu3ListComponent,
						InfoMenu3CommonComponent,
						Menu3Component
					],
					providers: [
						{provide: MatDialogRef},
						{provide: MAT_DIALOG_DATA}
					]
			}).compileComponents();

	}));

	menu3ComponentTests();
	menu3ModifyComponentTests();
	menu3ListComponentTests();
	infoMenu3CommonComponentTests();
	menu3AddComponentTests();
	menu3DetailComponentTests();

});