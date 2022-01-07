/**
 * @generated SignedSource<<e86617e169f8592ff4a992c75c79118e>>
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
export type SavedSearchButtonTestsQuery$variables = {
  criteria: SearchCriteriaAttributes;
};
export type SavedSearchButtonTestsQueryVariables = SavedSearchButtonTestsQuery$variables;
export type SavedSearchButtonTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SavedSearchButton_me">;
  } | null;
};
export type SavedSearchButtonTestsQueryResponse = SavedSearchButtonTestsQuery$data;
export type SavedSearchButtonTestsQuery = {
  variables: SavedSearchButtonTestsQueryVariables;
  response: SavedSearchButtonTestsQuery$data;
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
],
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SavedSearchButtonTestsQuery",
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
    "name": "SavedSearchButtonTestsQuery",
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
    "cacheID": "bbb84de5652d6027075d8bd9d0a504db",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.emailFrequency": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "me.id": (v2/*: any*/),
        "me.savedSearch": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SearchCriteria"
        },
        "me.savedSearch.internalID": (v2/*: any*/)
      }
    },
    "name": "SavedSearchButtonTestsQuery",
    "operationKind": "query",
    "text": "query SavedSearchButtonTestsQuery(\n  $criteria: SearchCriteriaAttributes!\n) {\n  me {\n    ...SavedSearchButton_me_1ff8oJ\n    id\n  }\n}\n\nfragment CreateSavedSearchContentContainerV1_me on Me {\n  emailFrequency\n}\n\nfragment SavedSearchButton_me_1ff8oJ on Me {\n  ...CreateSavedSearchContentContainerV1_me\n  savedSearch(criteria: $criteria) {\n    internalID\n  }\n}\n"
  }
};
})();

(node as any).hash = "d369f95a141fe0bd2f24bf5249e083ba";

export default node;
