export class User {

    public firstName: string;
    public lastName: string;
    public address1: string;
    public address2: string;
    public address3: string;
    public city: string;
    public state: string;
    public zipCode: string;
    public mobilePhone: string;
    public homePhone: string;
    public email: string;
    public password: string;
    public country: string;

    public language: string;
    public organizations: string [];
    public topics: string [];

    public alerts: {
        email: any [],
        marina: any [],
        emergency: any []
    };


    constructor(firstName?: string,
                lastName?: string,
                address1?: string,
                address2?: string,
                address3?: string,
                city?: string,
                state?: string,
                zipCode?: string,
                mobilePhone?: string,
                homePhone?: string,
                email?: string,
                password?: string,
                country?: string,
                language?: string,
                organizations?: string[],
                topics?: string[],
                alerts?: {
                    email: any [],
                    marina: any [],
                    emergency: any []
                }) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.address1 = address1 || '';
        this.address2 = address2 || '';
        this.address3 = address3 || '';
        this.city = city || '';
        this.state = state || '';
        this.zipCode = zipCode || '';
        this.mobilePhone = mobilePhone || '';
        this.homePhone = homePhone || '';
        this.email = email || '';
        this.password = password || '';
        this.country = country || '';

        this.language = language || '';
        this.organizations = organizations || [];
        this.topics = topics || [];

        this.alerts = alerts || {email: [], marina: [], emergency: []};
    }

}
