/* tslint:disable:no-unused-variable */

import {TestBed, inject} from "@angular/core/testing";
import {PrincessPeachService} from "./princess-peach.service";

describe('Service: PrincessPeach', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PrincessPeachService]
        });
    });

    it('should ...', inject([PrincessPeachService], (service: PrincessPeachService) => {
        expect(service).toBeTruthy();
    }));
});
