/**
 * @generated SignedSource<<a2eb75fda78d85ac78b1feb193e97d00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkImagesQuery$variables = {
  artworkSlug: string;
};
export type MyCollectionArtworkImagesQueryVariables = MyCollectionArtworkImagesQuery$variables;
export type MyCollectionArtworkImagesQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkImages_artwork">;
  } | null;
};
export type MyCollectionArtworkImagesQueryResponse = MyCollectionArtworkImagesQuery$data;
export type MyCollectionArtworkImagesQuery = {
  variables: MyCollectionArtworkImagesQueryVariables;
  response: MyCollectionArtworkImagesQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkSlug"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkImagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkImages_artwork"
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
    "name": "MyCollectionArtworkImagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
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
    "cacheID": "5860fb11c2582a9971e2751c80bed62e",
    "id": null,
    "metadata": {},
    "name": "MyCollectionArtworkImagesQuery",
    "operationKind": "query",
    "text": "query MyCollectionArtworkImagesQuery(\n  $artworkSlug: String!\n) {\n  artwork(id: $artworkSlug) {\n    ...MyCollectionArtworkImages_artwork\n    id\n  }\n}\n\nfragment MyCollectionArtworkImages_artwork on Artwork {\n  images {\n    height\n    isDefault\n    imageURL\n    width\n    internalID\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad6ac3fc201ed66308bb75b775768dab";

export default node;
