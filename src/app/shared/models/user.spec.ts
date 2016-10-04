/* tslint:disable:no-unused-variable */

import {addProviders} from "@angular/core/testing";
import {User} from "./user";

describe('User', () => {
    it('should create an instance', () => {
        expect(new User()).toBeTruthy();
    });

    it('when firstName is null should be populated with empty', () => {
        let user = new User();
        expect(user.firstName).toEqual('');
    });

});
