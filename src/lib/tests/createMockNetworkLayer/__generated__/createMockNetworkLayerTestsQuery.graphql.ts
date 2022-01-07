/**
 * @generated SignedSource<<c5b5b2ea75c084ab1acdd2cbf608c342>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type createMockNetworkLayerTestsQuery$variables = {};
export type createMockNetworkLayerTestsQueryVariables = createMockNetworkLayerTestsQuery$variables;
export type createMockNetworkLayerTestsQuery$data = {
  readonly artwork: {
    readonly id: string;
    readonly title: string | null;
  } | null;
};
export type createMockNetworkLayerTestsQueryResponse = createMockNetworkLayerTestsQuery$data;
export type createMockNetworkLayerTestsQuery = {
  variables: createMockNetworkLayerTestsQueryVariables;
  response: createMockNetworkLayerTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "untitled"
      }
    ],
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "artwork",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": "artwork(id:\"untitled\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "createMockNetworkLayerTestsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "createMockNetworkLayerTestsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0de7f21178b2e07411e95edac6027432",
    "id": null,
    "metadata": {},
    "name": "createMockNetworkLayerTestsQuery",
    "operationKind": "query",
    "text": "query createMockNetworkLayerTestsQuery {\n  artwork(id: \"untitled\") {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "1eeffdf1d257e48e4d0b0d33a8f7a7f8";

export default node;
