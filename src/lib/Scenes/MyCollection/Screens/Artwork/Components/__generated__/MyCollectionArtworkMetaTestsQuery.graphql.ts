/**
 * @generated SignedSource<<30b46f7f7d8fd15500f5a6de37df8b8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkMetaTestsQuery$variables = {};
export type MyCollectionArtworkMetaTestsQueryVariables = MyCollectionArtworkMetaTestsQuery$variables;
export type MyCollectionArtworkMetaTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkMeta_artwork">;
  } | null;
};
export type MyCollectionArtworkMetaTestsQueryResponse = MyCollectionArtworkMetaTestsQuery$data;
export type MyCollectionArtworkMetaTestsQuery = {
  variables: MyCollectionArtworkMetaTestsQueryVariables;
  response: MyCollectionArtworkMetaTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-slug"
  }
],
v1 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkMetaTestsQuery",
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
            "name": "MyCollectionArtworkMeta_artwork"
          }
        ],
        "storageKey": "artwork(id:\"some-slug\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyCollectionArtworkMetaTestsQuery",
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
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
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
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Money",
            "kind": "LinkedField",
            "name": "pricePaid",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              }
            ],
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
            "name": "depth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "editionNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "editionSize",
            "storageKey": null
          },
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
            "name": "medium",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "metric",
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
            "name": "width",
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
        "storageKey": "artwork(id:\"some-slug\")"
      }
    ]
  },
  "params": {
    "cacheID": "7edbb2aaa4aba37eb688e9e9cec000c3",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.artistNames": (v1/*: any*/),
        "artwork.category": (v1/*: any*/),
        "artwork.date": (v1/*: any*/),
        "artwork.depth": (v1/*: any*/),
        "artwork.editionNumber": (v1/*: any*/),
        "artwork.editionSize": (v1/*: any*/),
        "artwork.height": (v1/*: any*/),
        "artwork.id": (v2/*: any*/),
        "artwork.internalID": (v2/*: any*/),
        "artwork.medium": (v1/*: any*/),
        "artwork.metric": (v1/*: any*/),
        "artwork.pricePaid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Money"
        },
        "artwork.pricePaid.display": (v1/*: any*/),
        "artwork.slug": (v2/*: any*/),
        "artwork.title": (v1/*: any*/),
        "artwork.width": (v1/*: any*/)
      }
    },
    "name": "MyCollectionArtworkMetaTestsQuery",
    "operationKind": "query",
    "text": "query MyCollectionArtworkMetaTestsQuery {\n  artwork(id: \"some-slug\") {\n    ...MyCollectionArtworkMeta_artwork\n    id\n  }\n}\n\nfragment MyCollectionArtworkMeta_artwork on Artwork {\n  slug\n  internalID\n  artistNames\n  category\n  pricePaid {\n    display\n  }\n  date\n  depth\n  editionNumber\n  editionSize\n  height\n  medium\n  metric\n  title\n  width\n}\n"
  }
};
})();

(node as any).hash = "3ad4639bc2a617f78d4d4558e80ba4bd";

export default node;
