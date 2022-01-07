/**
 * @generated SignedSource<<333940158cd7bde6cc3ede23998b9037>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MyCollectionArtworkFormArtworkQuery$variables = {
  artworkID: string;
};
export type MyCollectionArtworkFormArtworkQueryVariables = MyCollectionArtworkFormArtworkQuery$variables;
export type MyCollectionArtworkFormArtworkQuery$data = {
  readonly artwork: {
    readonly medium: string | null;
    readonly date: string | null;
    readonly depth: string | null;
    readonly editionSize: string | null;
    readonly editionNumber: string | null;
    readonly height: string | null;
    readonly images: ReadonlyArray<{
      readonly height: number | null;
      readonly isDefault: boolean | null;
      readonly imageURL: string | null;
      readonly width: number | null;
    } | null> | null;
    readonly isEdition: boolean | null;
    readonly category: string | null;
    readonly metric: string | null;
    readonly title: string | null;
    readonly width: string | null;
  } | null;
};
export type MyCollectionArtworkFormArtworkQueryResponse = MyCollectionArtworkFormArtworkQuery$data;
export type MyCollectionArtworkFormArtworkQuery = {
  variables: MyCollectionArtworkFormArtworkQueryVariables;
  response: MyCollectionArtworkFormArtworkQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID"
  }
],
v2 = {
  "alias": "medium",
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depth",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionSize",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionNumber",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "images",
  "plural": true,
  "selections": [
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDefault",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageURL",
      "storageKey": null
    },
    (v8/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEdition",
  "storageKey": null
},
v11 = {
  "alias": "category",
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metric",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkFormArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v8/*: any*/)
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
    "name": "MyCollectionArtworkFormArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v8/*: any*/),
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
    "cacheID": "e26f1e2a349c697f51f9dbeacc2ac936",
    "id": null,
    "metadata": {},
    "name": "MyCollectionArtworkFormArtworkQuery",
    "operationKind": "query",
    "text": "query MyCollectionArtworkFormArtworkQuery(\n  $artworkID: String!\n) {\n  artwork(id: $artworkID) {\n    medium: category\n    date\n    depth\n    editionSize\n    editionNumber\n    height\n    images {\n      height\n      isDefault\n      imageURL\n      width\n    }\n    isEdition\n    category: medium\n    metric\n    title\n    width\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d0d766f34b04b2257a564d5678395e20";

export default node;
