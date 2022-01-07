/**
 * @generated SignedSource<<c19cdc0b19905c1a97fcc5a48f507d36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchCriteriaAttributes = {
  acquireable?: boolean | null;
  additionalGeneIDs?: ReadonlyArray<string> | null;
  artistID?: string | null;
  atAuction?: boolean | null;
  attributionClass?: ReadonlyArray<string> | null;
  colors?: ReadonlyArray<string> | null;
  dimensionRange?: string | null;
  height?: string | null;
  inquireableOnly?: boolean | null;
  locationCities?: ReadonlyArray<string> | null;
  majorPeriods?: ReadonlyArray<string> | null;
  materialsTerms?: ReadonlyArray<string> | null;
  offerable?: boolean | null;
  partnerIDs?: ReadonlyArray<string> | null;
  priceRange?: string | null;
  sizes?: ReadonlyArray<string> | null;
  width?: string | null;
};
export type SavedSearchButtonRefetchQuery$variables = {
  criteria?: SearchCriteriaAttributes | null;
};
export type SavedSearchButtonRefetchQueryVariables = SavedSearchButtonRefetchQuery$variables;
export type SavedSearchButtonRefetchQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SavedSearchButton_me">;
  } | null;
};
export type SavedSearchButtonRefetchQueryResponse = SavedSearchButtonRefetchQuery$data;
export type SavedSearchButtonRefetchQuery = {
  variables: SavedSearchButtonRefetchQueryVariables;
  response: SavedSearchButtonRefetchQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "criteria"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "criteria",
    "variableName": "criteria"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SavedSearchButtonRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "SavedSearchButton_me"
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
    "name": "SavedSearchButtonRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emailFrequency",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
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
              }
            ],
            "storageKey": null
          },
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
    "cacheID": "edbad9ba004d96f1de808620c042d1ba",
    "id": null,
    "metadata": {},
    "name": "SavedSearchButtonRefetchQuery",
    "operationKind": "query",
    "text": "query SavedSearchButtonRefetchQuery(\n  $criteria: SearchCriteriaAttributes\n) {\n  me {\n    ...SavedSearchButton_me_1ff8oJ\n    id\n  }\n}\n\nfragment CreateSavedSearchContentContainerV1_me on Me {\n  emailFrequency\n}\n\nfragment SavedSearchButton_me_1ff8oJ on Me {\n  ...CreateSavedSearchContentContainerV1_me\n  savedSearch(criteria: $criteria) {\n    internalID\n  }\n}\n"
  }
};
})();

(node as any).hash = "bb861ba8a8b1a0bfdc3df4b1be75d027";

export default node;
