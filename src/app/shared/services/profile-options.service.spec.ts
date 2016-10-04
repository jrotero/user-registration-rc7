/* tslint:disable:no-unused-variable */

import {TestBed, inject} from "@angular/core/testing";
import {ProfileOptionsService} from "./profile-options.service";

describe('Service: ProfileOptions', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProfileOptionsService]
        });
    });

    it('should ...', inject([ProfileOptionsService], (service: ProfileOptionsService) => {
        expect(service).toBeTruthy();
    }));
});
