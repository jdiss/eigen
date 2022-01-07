/**
 * @generated SignedSource<<28d60c923c2b4620ac850fbad1fa2226>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SavedSearchAlertQuery$variables = {
  savedSearchAlertId: string;
};
export type SavedSearchAlertQueryVariables = SavedSearchAlertQuery$variables;
export type SavedSearchAlertQuery$data = {
  readonly me: {
    readonly emailFrequency: string | null;
    readonly savedSearch: {
      readonly internalID: string;
      readonly acquireable: boolean | null;
      readonly additionalGeneIDs: ReadonlyArray<string>;
      readonly artistID: string | null;
      readonly atAuction: boolean | null;
      readonly attributionClass: ReadonlyArray<string>;
      readonly colors: ReadonlyArray<string>;
      readonly dimensionRange: string | null;
      readonly sizes: ReadonlyArray<string>;
      readonly height: string | null;
      readonly inquireableOnly: boolean | null;
      readonly locationCities: ReadonlyArray<string>;
      readonly majorPeriods: ReadonlyArray<string>;
      readonly materialsTerms: ReadonlyArray<string>;
      readonly offerable: boolean | null;
      readonly partnerIDs: ReadonlyArray<string>;
      readonly priceRange: string | null;
      readonly userAlertSettings: {
        readonly name: string | null;
        readonly email: boolean;
        readonly push: boolean;
      };
      readonly width: string | null;
    } | null;
  } | null;
};
export type SavedSearchAlertQueryResponse = SavedSearchAlertQuery$data;
export type SavedSearchAlertQuery = {
  variables: SavedSearchAlertQueryVariables;
  response: SavedSearchAlertQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "savedSearchAlertId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "emailFrequency",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "savedSearchAlertId"
    }
  ],
  "concreteType": "SearchCriteria",
  "kind": "LinkedField",
  "name": "savedSearch",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "acquireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "additionalGeneIDs",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artistID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "atAuction",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "attributionClass",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "colors",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dimensionRange",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sizes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "height",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inquireableOnly",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "locationCities",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "majorPeriods",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "materialsTerms",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "offerable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "partnerIDs",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priceRange",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SavedSearchUserAlertSettings",
      "kind": "LinkedField",
      "name": "userAlertSettings",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "push",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "width",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SavedSearchAlertQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
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
    "name": "SavedSearchAlertQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "001b65e4542f3c0b892b9011ad9cc803",
    "id": null,
    "metadata": {},
    "name": "SavedSearchAlertQuery",
    "operationKind": "query",
    "text": "query SavedSearchAlertQuery(\n  $savedSearchAlertId: ID!\n) {\n  me {\n    emailFrequency\n    savedSearch(id: $savedSearchAlertId) {\n      internalID\n      acquireable\n      additionalGeneIDs\n      artistID\n      atAuction\n      attributionClass\n      colors\n      dimensionRange\n      sizes\n      height\n      inquireableOnly\n      locationCities\n      majorPeriods\n      materialsTerms\n      offerable\n      partnerIDs\n      priceRange\n      userAlertSettings {\n        name\n        email\n        push\n      }\n      width\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f9113a2201aa52e9c5c28056815ad9d0";

export default node;
