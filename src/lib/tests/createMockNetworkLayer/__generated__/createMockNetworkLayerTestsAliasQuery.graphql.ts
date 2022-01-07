/**
 * @generated SignedSource<<68e61088a20fba9df9e20b4194d43e87>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type createMockNetworkLayerTestsAliasQuery$variables = {};
export type createMockNetworkLayerTestsAliasQueryVariables = createMockNetworkLayerTestsAliasQuery$variables;
export type createMockNetworkLayerTestsAliasQuery$data = {
  readonly artist: {
    readonly forSaleArtworks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
        } | null;
      } | null> | null;
    } | null;
    readonly notForSaleArtworks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type createMockNetworkLayerTestsAliasQueryResponse = createMockNetworkLayerTestsAliasQuery$data;
export type createMockNetworkLayerTestsAliasQuery = {
  variables: createMockNetworkLayerTestsAliasQueryVariables;
  response: createMockNetworkLayerTestsAliasQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "banksy"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ArtworkEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v3 = {
  "alias": "forSaleArtworks",
  "args": [
    {
      "kind": "Literal",
      "name": "filter",
      "value": "IS_FOR_SALE"
    }
  ],
  "concreteType": "ArtworkConnection",
  "kind": "LinkedField",
  "name": "artworksConnection",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": "artworksConnection(filter:\"IS_FOR_SALE\")"
},
v4 = {
  "alias": "notForSaleArtworks",
  "args": [
    {
      "kind": "Literal",
      "name": "filter",
      "value": "IS_NOT_FOR_SALE"
    }
  ],
  "concreteType": "ArtworkConnection",
  "kind": "LinkedField",
  "name": "artworksConnection",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": "artworksConnection(filter:\"IS_NOT_FOR_SALE\")"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "createMockNetworkLayerTestsAliasQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": "artist(id:\"banksy\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "createMockNetworkLayerTestsAliasQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": "artist(id:\"banksy\")"
      }
    ]
  },
  "params": {
    "cacheID": "f5ef215bce437df51c4fb3e13abae0e5",
    "id": null,
    "metadata": {},
    "name": "createMockNetworkLayerTestsAliasQuery",
    "operationKind": "query",
    "text": "query createMockNetworkLayerTestsAliasQuery {\n  artist(id: \"banksy\") {\n    forSaleArtworks: artworksConnection(filter: IS_FOR_SALE) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    notForSaleArtworks: artworksConnection(filter: IS_NOT_FOR_SALE) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b02bf9fa416501b4198a21a849e2d25f";

export default node;
