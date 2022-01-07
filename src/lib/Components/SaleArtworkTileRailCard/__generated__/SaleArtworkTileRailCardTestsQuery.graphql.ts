/**
 * @generated SignedSource<<0fb9840a85ffb4f30eaca8c4a110a364>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleArtworkTileRailCardTestsQuery$variables = {};
export type SaleArtworkTileRailCardTestsQueryVariables = SaleArtworkTileRailCardTestsQuery$variables;
export type SaleArtworkTileRailCardTestsQuery$data = {
  readonly saleArtwork: {
    readonly " $fragmentSpreads": FragmentRefs<"SaleArtworkTileRailCard_saleArtwork">;
  } | null;
};
export type SaleArtworkTileRailCardTestsQueryResponse = SaleArtworkTileRailCardTestsQuery$data;
export type SaleArtworkTileRailCardTestsQuery = {
  variables: SaleArtworkTileRailCardTestsQueryVariables;
  response: SaleArtworkTileRailCardTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "the-sale"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
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
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleArtworkTileRailCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SaleArtworkTileRailCard_saleArtwork"
          }
        ],
        "storageKey": "saleArtwork(id:\"the-sale\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SaleArtworkTileRailCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artwork",
            "kind": "LinkedField",
            "name": "artwork",
            "plural": false,
            "selections": [
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
                    "alias": "imageURL",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "aspectRatio",
                    "storageKey": null
                  }
                ],
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
                "name": "slug",
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
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtworkCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bidderPositions",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtworkCurrentBid",
            "kind": "LinkedField",
            "name": "currentBid",
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
            "name": "lotLabel",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAuction",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isClosed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "displayTimelyAt",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "saleArtwork(id:\"the-sale\")"
      }
    ]
  },
  "params": {
    "cacheID": "96febd82056beb8a2264e84e64a0312f",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "saleArtwork.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "saleArtwork.artwork.artistNames": (v2/*: any*/),
        "saleArtwork.artwork.date": (v2/*: any*/),
        "saleArtwork.artwork.href": (v2/*: any*/),
        "saleArtwork.artwork.id": (v3/*: any*/),
        "saleArtwork.artwork.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "saleArtwork.artwork.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "saleArtwork.artwork.image.imageURL": (v2/*: any*/),
        "saleArtwork.artwork.internalID": (v3/*: any*/),
        "saleArtwork.artwork.saleMessage": (v2/*: any*/),
        "saleArtwork.artwork.slug": (v3/*: any*/),
        "saleArtwork.artwork.title": (v2/*: any*/),
        "saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "saleArtwork.currentBid.display": (v2/*: any*/),
        "saleArtwork.id": (v3/*: any*/),
        "saleArtwork.lotLabel": (v2/*: any*/),
        "saleArtwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "saleArtwork.sale.displayTimelyAt": (v2/*: any*/),
        "saleArtwork.sale.id": (v3/*: any*/),
        "saleArtwork.sale.isAuction": (v4/*: any*/),
        "saleArtwork.sale.isClosed": (v4/*: any*/)
      }
    },
    "name": "SaleArtworkTileRailCardTestsQuery",
    "operationKind": "query",
    "text": "query SaleArtworkTileRailCardTestsQuery {\n  saleArtwork(id: \"the-sale\") {\n    ...SaleArtworkTileRailCard_saleArtwork\n    id\n  }\n}\n\nfragment SaleArtworkTileRailCard_saleArtwork on SaleArtwork {\n  artwork {\n    artistNames\n    date\n    href\n    image {\n      imageURL: url(version: \"small\")\n      aspectRatio\n    }\n    internalID\n    slug\n    saleMessage\n    title\n    id\n  }\n  counts {\n    bidderPositions\n  }\n  currentBid {\n    display\n  }\n  lotLabel\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6984680176745967effebe8d3fdbcccb";

export default node;
