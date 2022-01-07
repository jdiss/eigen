/**
 * @generated SignedSource<<b72993212a3ef88bce9d31b05ec6b094>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkMediumQuery$variables = {
  id: string;
};
export type ArtworkMediumQueryVariables = ArtworkMediumQuery$variables;
export type ArtworkMediumQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkMedium_artwork">;
  } | null;
};
export type ArtworkMediumQueryResponse = ArtworkMediumQuery$data;
export type ArtworkMediumQuery = {
  variables: ArtworkMediumQueryVariables;
  response: ArtworkMediumQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkMediumQuery",
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
            "name": "ArtworkMedium_artwork"
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
    "name": "ArtworkMediumQuery",
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
            "concreteType": "ArtworkMedium",
            "kind": "LinkedField",
            "name": "mediumType",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "longDescription",
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
    "cacheID": "d37b5a37025ecddb9ffbcd851c9027ab",
    "id": null,
    "metadata": {},
    "name": "ArtworkMediumQuery",
    "operationKind": "query",
    "text": "query ArtworkMediumQuery(\n  $id: String!\n) {\n  artwork(id: $id) {\n    ...ArtworkMedium_artwork\n    id\n  }\n}\n\nfragment ArtworkMedium_artwork on Artwork {\n  mediumType {\n    name\n    longDescription\n  }\n}\n"
  }
};
})();

(node as any).hash = "ed4bda445a7b162d073cacb37ccb2e80";

export default node;
