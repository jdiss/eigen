/**
 * @generated SignedSource<<8821d734ae9ed252d0871f7645e111bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkArtistMarketTestsQuery$variables = {};
export type MyCollectionArtworkArtistMarketTestsQueryVariables = MyCollectionArtworkArtistMarketTestsQuery$variables;
export type MyCollectionArtworkArtistMarketTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistMarket_artwork">;
  } | null;
  readonly marketPriceInsights: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistMarket_marketPriceInsights">;
  } | null;
};
export type MyCollectionArtworkArtistMarketTestsQueryResponse = MyCollectionArtworkArtistMarketTestsQuery$data;
export type MyCollectionArtworkArtistMarketTestsQuery = {
  variables: MyCollectionArtworkArtistMarketTestsQueryVariables;
  response: MyCollectionArtworkArtistMarketTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "foo"
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
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkArtistMarketTestsQuery",
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
            "name": "MyCollectionArtworkArtistMarket_artwork"
          }
        ],
        "storageKey": "artwork(id:\"foo\")"
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
            "name": "MyCollectionArtworkArtistMarket_marketPriceInsights"
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
    "name": "MyCollectionArtworkArtistMarketTestsQuery",
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
        "storageKey": "artwork(id:\"foo\")"
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
            "name": "annualLotsSold",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "annualValueSoldCents",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sellThroughRate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "medianSaleToEstimateRatio",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "liquidityRank",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "demandTrend",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "marketPriceInsights(artistId:\"some-artist-id\",medium:\"painting\")"
      }
    ]
  },
  "params": {
    "cacheID": "91b95c29d773ab51622c8d8118c8d6ff",
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
        "marketPriceInsights.annualLotsSold": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Int"
        },
        "marketPriceInsights.annualValueSoldCents": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "BigInt"
        },
        "marketPriceInsights.demandTrend": (v4/*: any*/),
        "marketPriceInsights.id": (v3/*: any*/),
        "marketPriceInsights.liquidityRank": (v4/*: any*/),
        "marketPriceInsights.medianSaleToEstimateRatio": (v4/*: any*/),
        "marketPriceInsights.sellThroughRate": (v4/*: any*/)
      }
    },
    "name": "MyCollectionArtworkArtistMarketTestsQuery",
    "operationKind": "query",
    "text": "query MyCollectionArtworkArtistMarketTestsQuery {\n  artwork(id: \"foo\") {\n    ...MyCollectionArtworkArtistMarket_artwork\n    id\n  }\n  marketPriceInsights(artistId: \"some-artist-id\", medium: \"painting\") {\n    ...MyCollectionArtworkArtistMarket_marketPriceInsights\n    id\n  }\n}\n\nfragment MyCollectionArtworkArtistMarket_artwork on Artwork {\n  internalID\n  slug\n}\n\nfragment MyCollectionArtworkArtistMarket_marketPriceInsights on MarketPriceInsights {\n  annualLotsSold\n  annualValueSoldCents\n  sellThroughRate\n  medianSaleToEstimateRatio\n  liquidityRank\n  demandTrend\n}\n"
  }
};
})();

(node as any).hash = "74ffb5cbe4d55f77acc982cd8e33685b";

export default node;
