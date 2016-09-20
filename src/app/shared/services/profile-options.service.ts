import { Injectable } from '@angular/core';

@Injectable()
export class ProfileOptionsService {

  constructor() { }

  public languages = [
      {
        label: "English",
        value: "english"
      },
      {
        label: "Spanish",
        value: "spanish"
      },
      {
        label: "Creole",
        value: "creole"
      }

    ]

  public organizations = [
      {
      "name": "Aviation",
      "mduid": "org1462998837332169",
      "slug": "aviation"
      },
      {
      "name": "Communications",
      "mduid": "org1450716322949675",
      "slug": "communications"
      },
      {
      "name": "Clerk of the Courts",
      "mduid": "org1469480648794208",
      "slug": "clerk-of-the-courts"
      },
      {
      "name": "Animal Services",
      "mduid": "org1450714342984597",
      "slug": "animal-services"
      },
      {
      "name": "Audit and Management Services",
      "mduid": "org1462990937201243",
      "slug": "audit-and-management-services"
      },
      {
      "name": "Board of County Commissioners",
      "mduid": "org1469544827378191",
      "slug": "board-of-county-commissioners"
      },
      {
      "name": "Community Action and Human Services",
      "mduid": "org1462991414985875",
      "slug": "community-action-and-human-services"
      },
      {
      "name": "Corrections and Rehabilitation",
      "mduid": "org1462991607980617",
      "slug": "corrections-and-rehabilitation"
      },
      {
      "name": "Cultural Affairs",
      "mduid": "org1462991764124130",
      "slug": "cultural-affairs"
      },
      {
      "name": "Elections",
      "mduid": "org146299202858021",
      "slug": "elections"
      }
    ]

   public topics = [
        {
          label : "Animals &amp; Pets",
          value : "animals-pets"
        },
        {
          label : "Building &amp; Construction",
          value : "building-construction"
        },
        {
          label : "Business &amp; Trade",
          value : "business-trade"
        },
        {
          label : "Environment &amp; Resilience",
          value : "environment-resilience"
        },
        {
          label : "Government &amp; Legislation",
          value : "government-legislation"
        },
        {
          label : "Home &amp; Property",
          value : "home-property"
        },
        {
          label : "Jobs &amp; Employment",
          value : "jobs-employment"
        },
        {
          label : "Public Safety",
          value : "public-safety"
        },
        {
          label : "Social Services",
          value : "social-services"
        },
        {
          label : "Recreation &amp; Culture",
          value : "recreation-culture"
        },
        {
          label : "Transportation &amp; Travel",
          value : "transportation-travel"
        }
    ]


    public alerts = [
    	{
        id: "10019",
        label: "Marina 19",
        description: "",
        type: "marina"
      },
      {
    		id: "10001",
    		label: "Interest Topics",
    		description: "",
    		type: "email"
    	},
    	{
    		id: "10002",
    		label: "Events Near Me",
    		description: "",
    		type: "email"
    	},
      {
        id: "10033",
        label: "Emergency 1",
        description: "",
        type: "emergency"
      },
      {
        id: "10034",
        label: "Emergency 2",
        description: "",
        type: "emergency"
      },
    	{
    		id: "10003",
    		label: "Grants Mail",
    		description: "",
    		type: "email"
    	},
    	{
    		id: "10004",
    		label: "Legal Notices",
    		description: "",
    		type: "email"
    	},
    	{
    		id: "10005",
    		label: "Mayor's Week in Review",
    		description: "",
    		type: "email"
    	},
    	{
    		id: "10006",
    		label: "PortMiami Currents",
    		description: "",
    		type: "email"
    	},
      {
        id: "10007",
        label: "Marina 1",
        description: "",
        type: "marina"
      },
      {
        id: "10008",
        label: "Marina 2",
        description: "",
        type: "marina"
      },
      {
        id: "10009",
        label: "Marina 3",
        description: "",
        type: "marina"
      },
    ]
 
}
