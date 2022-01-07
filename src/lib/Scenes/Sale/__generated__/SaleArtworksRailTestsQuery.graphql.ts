/**
 * @generated SignedSource<<768526b5fde5baff0771797ba850c87f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleArtworksRailTestsQuery$variables = {
  saleID?: string | null;
};
export type SaleArtworksRailTestsQueryVariables = SaleArtworksRailTestsQuery$variables;
export type SaleArtworksRailTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SaleArtworksRail_me">;
  } | null;
};
export type SaleArtworksRailTestsQueryResponse = SaleArtworksRailTestsQuery$data;
export type SaleArtworksRailTestsQuery = {
  variables: SaleArtworksRailTestsQueryVariables;
  response: SaleArtworksRailTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleID"
  }
],
v1 = {
  "kind": "Variable",
  "name": "saleID",
  "variableName": "saleID"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleArtworksRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": [
              (v1/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "SaleArtworksRail_me"
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
    "name": "SaleArtworksRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              },
              {
                "kind": "Literal",
                "name": "includeArtworksByFollowedArtists",
                "value": true
              },
              (v1/*: any*/)
            ],
            "concreteType": "SaleArtworksConnection",
            "kind": "LinkedField",
            "name": "lotsByFollowedArtistsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtwork",
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
                      (v2/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
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
                              (v3/*: any*/),
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
                              (v2/*: any*/)
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
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e4f15be0d39fa5372896f18775584fc4",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworksConnection"
        },
        "me.lotsByFollowedArtistsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "SaleArtwork"
        },
        "me.lotsByFollowedArtistsConnection.edges.id": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node": (v5/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.href": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.id": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork": (v5/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.artistNames": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.date": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.href": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.id": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.image.imageURL": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.internalID": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.saleMessage": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.slug": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.artwork.title": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.currentBid.display": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.id": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.lotLabel": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.sale.displayTimelyAt": (v6/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.sale.id": (v4/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.sale.isAuction": (v7/*: any*/),
        "me.lotsByFollowedArtistsConnection.edges.node.saleArtwork.sale.isClosed": (v7/*: any*/)
      }
    },
    "name": "SaleArtworksRailTestsQuery",
    "operationKind": "query",
    "text": "query SaleArtworksRailTestsQuery(\n  $saleID: ID\n) {\n  me {\n    ...SaleArtworksRail_me_nfIph\n    id\n  }\n}\n\nfragment SaleArtworkTileRailCard_saleArtwork on SaleArtwork {\n  artwork {\n    artistNames\n    date\n    href\n    image {\n      imageURL: url(version: \"small\")\n      aspectRatio\n    }\n    internalID\n    slug\n    saleMessage\n    title\n    id\n  }\n  counts {\n    bidderPositions\n  }\n  currentBid {\n    display\n  }\n  lotLabel\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    id\n  }\n}\n\nfragment SaleArtworksRail_me_nfIph on Me {\n  lotsByFollowedArtistsConnection(first: 10, includeArtworksByFollowedArtists: true, saleID: $saleID) {\n    edges {\n      node {\n        id\n        href\n        saleArtwork {\n          ...SaleArtworkTileRailCard_saleArtwork\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "89b5df5f731ff60fa7470ca0f2af5291";

export default node;
