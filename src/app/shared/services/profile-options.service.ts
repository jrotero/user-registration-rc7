import {Injectable} from '@angular/core';

@Injectable()
export class ProfileOptionsService {



    public languages = [
        {
            label: 'English',
            value: 'english'
        },
        {
            label: 'Spanish',
            value: 'spanish'
        },
        {
            label: 'Creole',
            value: 'creole'
        }

    ];

    public organizations = [
        {
            'name': 'Aviation',
            'mduid': 'org1462998837332169',
            'slug': 'aviation'
        },
        {
            'name': 'Communications',
            'mduid': 'org1450716322949675',
            'slug': 'communications'
        },
        {
            'name': 'Clerk of the Courts',
            'mduid': 'org1469480648794208',
            'slug': 'clerk-of-the-courts'
        },
        {
            'name': 'Animal Services',
            'mduid': 'org1450714342984597',
            'slug': 'animal-services'
        },
        {
            'name': 'Audit and Management Services',
            'mduid': 'org1462990937201243',
            'slug': 'audit-and-management-services'
        },
        {
            'name': 'Board of County Commissioners',
            'mduid': 'org1469544827378191',
            'slug': 'board-of-county-commissioners'
        },
        {
            'name': 'Community Action and Human Services',
            'mduid': 'org1462991414985875',
            'slug': 'community-action-and-human-services'
        },
        {
            'name': 'Corrections and Rehabilitation',
            'mduid': 'org1462991607980617',
            'slug': 'corrections-and-rehabilitation'
        },
        {
            'name': 'Cultural Affairs',
            'mduid': 'org1462991764124130',
            'slug': 'cultural-affairs'
        },
        {
            'name': 'Elections',
            'mduid': 'org146299202858021',
            'slug': 'elections'
        }
    ];

    public topics = [
        {
            label: 'Animals &amp; Pets',
            value: 'animals-pets'
        },
        {
            label: 'Building &amp; Construction',
            value: 'building-construction'
        },
        {
            label: 'Business &amp; Trade',
            value: 'business-trade'
        },
        {
            label: 'Environment &amp; Resilience',
            value: 'environment-resilience'
        },
        {
            label: 'Government &amp; Legislation',
            value: 'government-legislation'
        },
        {
            label: 'Home &amp; Property',
            value: 'home-property'
        },
        {
            label: 'Jobs &amp; Employment',
            value: 'jobs-employment'
        },
        {
            label: 'Public Safety',
            value: 'public-safety'
        },
        {
            label: 'Social Services',
            value: 'social-services'
        },
        {
            label: 'Recreation &amp; Culture',
            value: 'recreation-culture'
        },
        {
            label: 'Transportation &amp; Travel',
            value: 'transportation-travel'
        }
    ];


    public alerts = {

        email: [
            {
                id: '10001',
                label: 'Interest Topics',
                description: ''
            },
            {
                id: '10002',
                label: 'Events Near Me',
                description: ''
            },
            {
                id: '10003',
                label: 'Grants Mail',
                description: ''
            },
            {
                id: '10004',
                label: 'Legal Notices',
                description: ''
            },
            {
                id: '10005',
                label: "Mayor's Week in Review",
                description: ''
            },
            {
                id: '10006',
                label: 'PortMiami Currents',
                description: ''
            }
        ],

        marina: [
            {
                id: '10020',
                label: 'Marina 20',
                description: ''
            },
            {
                id: '10016',
                label: 'Marina 1',
                description: ''
            },
            {
                id: '10017',
                label: 'Marina 2',
                description: ''
            },
            {
                id: '10018',
                label: 'Marina 3',
                description: ''
            }
        ],

        emergency: [
            {
                id: '10030',
                label: 'Emergency 1',
                description: ''
            },
            {
                id: '10031',
                label: 'Emergency 2',
                description: ''
            }
        ]

    };


    constructor() {
    }


}
