/**
 * @generated SignedSource<<edb15993ae67558edb1c8db7b44ebe3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemArtwork_Test_Query$variables = {};
export type ItemArtwork_Test_QueryVariables = ItemArtwork_Test_Query$variables;
export type ItemArtwork_Test_Query$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ItemArtwork_artwork">;
  } | null;
};
export type ItemArtwork_Test_QueryResponse = ItemArtwork_Test_Query$data;
export type ItemArtwork_Test_Query = {
  variables: ItemArtwork_Test_QueryVariables;
  response: ItemArtwork_Test_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-artwork"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemArtwork_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemArtwork_artwork"
          }
        ],
        "storageKey": "artwork(id:\"test-artwork\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemArtwork_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "href",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              {
                "alias": "thumbnailUrl",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "small"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"small\")"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "artistNames",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "saleMessage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Partner",
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"test-artwork\")"
      }
    ]
  },
  "params": {
    "cacheID": "041c1ce208d5e73756235352dde1fcc0",
    "id": null,
    "metadata": {},
    "name": "ItemArtwork_Test_Query",
    "operationKind": "query",
    "text": "query ItemArtwork_Test_Query {\n  artwork(id: \"test-artwork\") {\n    ...ItemArtwork_artwork\n    id\n  }\n}\n\nfragment ItemArtwork_artwork on Artwork {\n  href\n  image {\n    thumbnailUrl: url(version: \"small\")\n  }\n  title\n  artistNames\n  date\n  saleMessage\n  partner {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e5da006191af09a600fedc49a5caf040";

export default node;
