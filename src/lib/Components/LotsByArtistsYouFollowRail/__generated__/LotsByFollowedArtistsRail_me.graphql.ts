/**
 * @generated SignedSource<<83284be8d330bbf9b14281d6d21c6d8f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LotsByFollowedArtistsRail_me$data = {
  readonly lotsByFollowedArtistsConnection: {
    readonly pageInfo: {
      readonly hasNextPage: boolean;
      readonly startCursor: string | null;
      readonly endCursor: string | null;
    };
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly href: string | null;
        readonly saleArtwork: {
          readonly " $fragmentSpreads": FragmentRefs<"SaleArtworkTileRailCard_saleArtwork">;
        } | null;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "LotsByFollowedArtistsRail_me";
};
export type LotsByFollowedArtistsRail_me = LotsByFollowedArtistsRail_me$data;
export type LotsByFollowedArtistsRail_me$key = {
  readonly " $data"?: LotsByFollowedArtistsRail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"LotsByFollowedArtistsRail_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 6,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "lotsByFollowedArtistsConnection"
        ]
      }
    ]
  },
  "name": "LotsByFollowedArtistsRail_me",
  "selections": [
    {
      "alias": "lotsByFollowedArtistsConnection",
      "args": [
        {
          "kind": "Literal",
          "name": "includeArtworksByFollowedArtists",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "isAuction",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "liveSale",
          "value": true
        }
      ],
      "concreteType": "SaleArtworksConnection",
      "kind": "LinkedField",
      "name": "__LotsByFollowedArtistsRail_lotsByFollowedArtistsConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
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
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__LotsByFollowedArtistsRail_lotsByFollowedArtistsConnection_connection(includeArtworksByFollowedArtists:true,isAuction:true,liveSale:true)"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "636c1645a54f360182abe3773fee73de";

export default node;
