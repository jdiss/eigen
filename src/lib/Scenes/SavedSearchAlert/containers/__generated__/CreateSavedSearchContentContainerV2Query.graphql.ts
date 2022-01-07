/**
 * @generated SignedSource<<598a93b213da124969803c9cac0cd738>>
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
export type CreateSavedSearchContentContainerV2Query$variables = {
  criteria: SearchCriteriaAttributes;
};
export type CreateSavedSearchContentContainerV2QueryVariables = CreateSavedSearchContentContainerV2Query$variables;
export type CreateSavedSearchContentContainerV2Query$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainerV2_me">;
  } | null;
};
export type CreateSavedSearchContentContainerV2QueryResponse = CreateSavedSearchContentContainerV2Query$data;
export type CreateSavedSearchContentContainerV2Query = {
  variables: CreateSavedSearchContentContainerV2QueryVariables;
  response: CreateSavedSearchContentContainerV2Query$data;
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
    "name": "CreateSavedSearchContentContainerV2Query",
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
            "name": "CreateSavedSearchContentContainerV2_me"
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
    "name": "CreateSavedSearchContentContainerV2Query",
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
    "cacheID": "b635ab06273d929c97ba4b6d2e68a80f",
    "id": null,
    "metadata": {},
    "name": "CreateSavedSearchContentContainerV2Query",
    "operationKind": "query",
    "text": "query CreateSavedSearchContentContainerV2Query(\n  $criteria: SearchCriteriaAttributes!\n) {\n  me {\n    ...CreateSavedSearchContentContainerV2_me_1ff8oJ\n    id\n  }\n}\n\nfragment CreateSavedSearchContentContainerV2_me_1ff8oJ on Me {\n  emailFrequency\n  savedSearch(criteria: $criteria) {\n    internalID\n  }\n}\n"
  }
};
})();

(node as any).hash = "83e19f35cf81a2faacf7ed1828cf614f";

export default node;
