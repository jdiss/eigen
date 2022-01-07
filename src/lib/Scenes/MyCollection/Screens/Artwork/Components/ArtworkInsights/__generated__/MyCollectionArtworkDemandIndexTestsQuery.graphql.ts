/**
 * @generated SignedSource<<84ddcdd42574b3e46ae9aa3ff519ef64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkDemandIndexTestsQuery$variables = {};
export type MyCollectionArtworkDemandIndexTestsQueryVariables = MyCollectionArtworkDemandIndexTestsQuery$variables;
export type MyCollectionArtworkDemandIndexTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkDemandIndex_artwork">;
  } | null;
  readonly marketPriceInsights: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkDemandIndex_marketPriceInsights">;
  } | null;
};
export type MyCollectionArtworkDemandIndexTestsQueryResponse = MyCollectionArtworkDemandIndexTestsQuery$data;
export type MyCollectionArtworkDemandIndexTestsQuery = {
  variables: MyCollectionArtworkDemandIndexTestsQueryVariables;
  response: MyCollectionArtworkDemandIndexTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-artwork-id"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "artistId",
    "value": "some-artist-id"
  },
  {
    "kind": "Literal",
    "name": "medium",
    "value": "painting"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
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
    "name": "MyCollectionArtworkDemandIndexTestsQuery",
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
            "name": "MyCollectionArtworkDemandIndex_artwork"
          }
        ],
        "storageKey": "artwork(id:\"some-artwork-id\")"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkDemandIndex_marketPriceInsights"
          }
        ],
        "storageKey": "marketPriceInsights(artistId:\"some-artist-id\",medium:\"painting\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyCollectionArtworkDemandIndexTestsQuery",
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
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "artwork(id:\"some-artwork-id\")"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "demandRank",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "marketPriceInsights(artistId:\"some-artist-id\",medium:\"painting\")"
      }
    ]
  },
  "params": {
    "cacheID": "529f0a3da3f170f5454ab6542eac22f6",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.id": (v3/*: any*/),
        "artwork.internalID": (v3/*: any*/),
        "artwork.slug": (v3/*: any*/),
        "marketPriceInsights": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MarketPriceInsights"
        },
        "marketPriceInsights.demandRank": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Float"
        },
        "marketPriceInsights.id": (v3/*: any*/)
      }
    },
    "name": "MyCollectionArtworkDemandIndexTestsQuery",
    "operationKind": "query",
    "text": "query MyCollectionArtworkDemandIndexTestsQuery {\n  artwork(id: \"some-artwork-id\") {\n    ...MyCollectionArtworkDemandIndex_artwork\n    id\n  }\n  marketPriceInsights(artistId: \"some-artist-id\", medium: \"painting\") {\n    ...MyCollectionArtworkDemandIndex_marketPriceInsights\n    id\n  }\n}\n\nfragment MyCollectionArtworkDemandIndex_artwork on Artwork {\n  internalID\n  slug\n}\n\nfragment MyCollectionArtworkDemandIndex_marketPriceInsights on MarketPriceInsights {\n  demandRank\n}\n"
  }
};
})();

(node as any).hash = "fff5977d298543eae7a09e441e67923b";

export default node;
