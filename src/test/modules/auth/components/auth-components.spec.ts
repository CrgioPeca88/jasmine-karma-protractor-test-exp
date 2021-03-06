// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

// Assets
import { LoginComponent } from '@modules/auth/components/login/login.component';
import { AuthRoutingModule } from '@modules/auth/auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import loginComponentTests from './login/login.component.spec';

describe('*[AuthModule]: ---------------------------------------------', () => {

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				AuthRoutingModule,
				ReactiveFormsModule,
				SharedModule
			],
			declarations: [
				LoginComponent
			],
		}).compileComponents();
	}));

	loginComponentTests();

});
