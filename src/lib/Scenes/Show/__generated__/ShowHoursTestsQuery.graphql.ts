/**
 * @generated SignedSource<<7dacc98fa5ac956bac030b9e24dfe179>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowHoursTestsQuery$variables = {
  showID: string;
};
export type ShowHoursTestsQueryVariables = ShowHoursTestsQuery$variables;
export type ShowHoursTestsQuery$data = {
  readonly show: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowHours_show">;
  } | null;
};
export type ShowHoursTestsQueryResponse = ShowHoursTestsQuery$data;
export type ShowHoursTestsQuery = {
  variables: ShowHoursTestsQueryVariables;
  response: ShowHoursTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "showID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "showID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Location",
  "kind": "LinkedField",
  "name": "location",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "openingHours",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FormattedDaySchedules",
              "kind": "LinkedField",
              "name": "schedules",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "days",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hours",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "OpeningHoursArray",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            }
          ],
          "type": "OpeningHoursText",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Location"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "OpeningHoursUnion"
},
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "FormattedDaySchedules"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowHoursTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowHours_show"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShowHoursTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Fair",
            "kind": "LinkedField",
            "name": "fair",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a9cd5f76d580092e9539bb7460d60ef7",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "show": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "show.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "show.fair.id": (v4/*: any*/),
        "show.fair.location": (v5/*: any*/),
        "show.fair.location.id": (v4/*: any*/),
        "show.fair.location.openingHours": (v6/*: any*/),
        "show.fair.location.openingHours.__typename": (v7/*: any*/),
        "show.fair.location.openingHours.schedules": (v8/*: any*/),
        "show.fair.location.openingHours.schedules.days": (v9/*: any*/),
        "show.fair.location.openingHours.schedules.hours": (v9/*: any*/),
        "show.fair.location.openingHours.text": (v9/*: any*/),
        "show.id": (v4/*: any*/),
        "show.location": (v5/*: any*/),
        "show.location.id": (v4/*: any*/),
        "show.location.openingHours": (v6/*: any*/),
        "show.location.openingHours.__typename": (v7/*: any*/),
        "show.location.openingHours.schedules": (v8/*: any*/),
        "show.location.openingHours.schedules.days": (v9/*: any*/),
        "show.location.openingHours.schedules.hours": (v9/*: any*/),
        "show.location.openingHours.text": (v9/*: any*/)
      }
    },
    "name": "ShowHoursTestsQuery",
    "operationKind": "query",
    "text": "query ShowHoursTestsQuery(\n  $showID: String!\n) {\n  show(id: $showID) {\n    ...ShowHours_show\n    id\n  }\n}\n\nfragment ShowHours_show on Show {\n  id\n  location {\n    ...ShowLocationHours_location\n    id\n  }\n  fair {\n    location {\n      ...ShowLocationHours_location\n      id\n    }\n    id\n  }\n}\n\nfragment ShowLocationHours_location on Location {\n  openingHours {\n    __typename\n    ... on OpeningHoursArray {\n      schedules {\n        days\n        hours\n      }\n    }\n    ... on OpeningHoursText {\n      text\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9e3dd44071029e3cb1a4cafaa207fe22";

export default node;
