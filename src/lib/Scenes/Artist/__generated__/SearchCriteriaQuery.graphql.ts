/**
 * @generated SignedSource<<0b2a4153c54dac437151383892562e79>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SearchCriteriaQuery$variables = {
  searchCriteriaId: string;
};
export type SearchCriteriaQueryVariables = SearchCriteriaQuery$variables;
export type SearchCriteriaQuery$data = {
  readonly me: {
    readonly email: string | null;
    readonly savedSearch: {
      readonly acquireable: boolean | null;
      readonly additionalGeneIDs: ReadonlyArray<string>;
      readonly artistID: string | null;
      readonly atAuction: boolean | null;
      readonly attributionClass: ReadonlyArray<string>;
      readonly colors: ReadonlyArray<string>;
      readonly dimensionRange: string | null;
      readonly height: string | null;
      readonly inquireableOnly: boolean | null;
      readonly locationCities: ReadonlyArray<string>;
      readonly majorPeriods: ReadonlyArray<string>;
      readonly materialsTerms: ReadonlyArray<string>;
      readonly offerable: boolean | null;
      readonly partnerIDs: ReadonlyArray<string>;
      readonly priceRange: string | null;
      readonly width: string | null;
      readonly sizes: ReadonlyArray<string>;
    } | null;
  } | null;
};
export type SearchCriteriaQueryResponse = SearchCriteriaQuery$data;
export type SearchCriteriaQuery = {
  variables: SearchCriteriaQueryVariables;
  response: SearchCriteriaQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchCriteriaId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "searchCriteriaId"
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
      "kind": "ScalarField",
      "name": "width",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sizes",
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
    "name": "SearchCriteriaQuery",
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
    "name": "SearchCriteriaQuery",
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
    "cacheID": "ee1a590031e94c57799b4bb2edeedc59",
    "id": null,
    "metadata": {},
    "name": "SearchCriteriaQuery",
    "operationKind": "query",
    "text": "query SearchCriteriaQuery(\n  $searchCriteriaId: ID!\n) {\n  me {\n    email\n    savedSearch(id: $searchCriteriaId) {\n      acquireable\n      additionalGeneIDs\n      artistID\n      atAuction\n      attributionClass\n      colors\n      dimensionRange\n      height\n      inquireableOnly\n      locationCities\n      majorPeriods\n      materialsTerms\n      offerable\n      partnerIDs\n      priceRange\n      width\n      sizes\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "82daec872d3fdb2c57fdcc0de7aa065f";

export default node;
