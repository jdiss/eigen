/**
 * @generated SignedSource<<143ef8420ea4e9aeaf7e864042e7c47b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TimeOffsetProviderQuery$variables = {};
export type TimeOffsetProviderQueryVariables = TimeOffsetProviderQuery$variables;
export type TimeOffsetProviderQuery$data = {
  readonly system: {
    readonly time: {
      readonly unix: number | null;
    } | null;
  } | null;
};
export type TimeOffsetProviderQueryResponse = TimeOffsetProviderQuery$data;
export type TimeOffsetProviderQuery = {
  variables: TimeOffsetProviderQueryVariables;
  response: TimeOffsetProviderQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "System",
    "kind": "LinkedField",
    "name": "system",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SystemTime",
        "kind": "LinkedField",
        "name": "time",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "unix",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TimeOffsetProviderQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TimeOffsetProviderQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2a9481ee99ef977b10d9916f3943a168",
    "id": null,
    "metadata": {},
    "name": "TimeOffsetProviderQuery",
    "operationKind": "query",
    "text": "query TimeOffsetProviderQuery {\n  system {\n    time {\n      unix\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff8ce7414100bd7ef9284bc9352ade24";

export default node;
