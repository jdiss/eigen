/**
 * @generated SignedSource<<9bf5ef243fe473f4acdf5c906f581035>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LotsByArtistsYouFollow_me$data = {
  readonly lotsByFollowedArtistsConnection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string | null;
    } | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"InfiniteScrollArtworksGrid_connection">;
  } | null;
  readonly " $fragmentType": "LotsByArtistsYouFollow_me";
};
export type LotsByArtistsYouFollow_me = LotsByArtistsYouFollow_me$data;
export type LotsByArtistsYouFollow_me$key = {
  readonly " $data"?: LotsByArtistsYouFollow_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"LotsByArtistsYouFollow_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
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
  "name": "LotsByArtistsYouFollow_me",
  "selections": [
    {
      "alias": "lotsByFollowedArtistsConnection",
      "args": [
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
      "name": "__LotsByArtistsYouFollow_lotsByFollowedArtistsConnection_connection",
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
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
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
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "InfiniteScrollArtworksGrid_connection"
        },
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
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__LotsByArtistsYouFollow_lotsByFollowedArtistsConnection_connection(isAuction:true,liveSale:true)"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "ace64acc07e9ecbaaa1c447f34eb3840";

export default node;
