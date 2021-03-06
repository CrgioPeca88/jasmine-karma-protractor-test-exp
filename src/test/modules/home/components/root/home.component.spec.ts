// Dependencies
import { TestBed, waitForAsync } from '@angular/core/testing';

// Assets
import { HomeComponent } from '@modules/home/components/root/home.component';

export default function() {
	describe('1). RootComponent:', () => {

		let _fixture;
		let _homeComponent;

		beforeEach(waitForAsync(() => {
			// Initial Arrange
			_fixture = TestBed.createComponent(HomeComponent);
			_homeComponent = _fixture.debugElement.componentInstance;
		}));

		it(`1.1). should create the home component`, waitForAsync(() => {
			// Action & Assert
			expect(_homeComponent).toBeTruthy();
		}));

	});
}
