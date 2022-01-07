/**
 * @generated SignedSource<<05dc9a9c60eee139757196043c706c5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairEmptyStateTestsQuery$variables = {};
export type FairEmptyStateTestsQueryVariables = FairEmptyStateTestsQuery$variables;
export type FairEmptyStateTestsQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"FairEmptyState_fair">;
  } | null;
};
export type FairEmptyStateTestsQueryResponse = FairEmptyStateTestsQuery$data;
export type FairEmptyStateTestsQuery = {
  variables: FairEmptyStateTestsQueryVariables;
  response: FairEmptyStateTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "example-fair-id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FairEmptyStateTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairEmptyState_fair"
          }
        ],
        "storageKey": "fair(id:\"example-fair-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FairEmptyStateTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isActive",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endAt",
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
        "storageKey": "fair(id:\"example-fair-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "94481037b78580510f85f58c80304466",
    "id": null,
    "metadata": {},
    "name": "FairEmptyStateTestsQuery",
    "operationKind": "query",
    "text": "query FairEmptyStateTestsQuery {\n  fair(id: \"example-fair-id\") {\n    ...FairEmptyState_fair\n    id\n  }\n}\n\nfragment FairEmptyState_fair on Fair {\n  isActive\n  endAt\n}\n"
  }
};
})();

(node as any).hash = "93bd17a10f37ff96b8b7da13a16bff0b";

export default node;
