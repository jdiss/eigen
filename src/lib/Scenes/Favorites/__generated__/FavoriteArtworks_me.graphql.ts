/**
 * @generated SignedSource<<02c576295a7df8ef9a2a1faad1a05ea5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FavoriteArtworks_me$data = {
  readonly labFeatures: ReadonlyArray<string>;
  readonly followsAndSaves: {
    readonly artworks: {
      readonly pageInfo: {
        readonly startCursor: string | null;
        readonly endCursor: string | null;
        readonly hasPreviousPage: boolean;
        readonly hasNextPage: boolean;
      };
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"GenericGrid_artworks">;
        } | null;
      } | null> | null;
    } | null;
  } | null;
  readonly " $fragmentType": "FavoriteArtworks_me";
};
export type FavoriteArtworks_me = FavoriteArtworks_me$data;
export type FavoriteArtworks_me$key = {
  readonly " $data"?: FavoriteArtworks_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"FavoriteArtworks_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": "",
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
          "followsAndSaves",
          "artworks"
        ]
      }
    ]
  },
  "name": "FavoriteArtworks_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "labFeatures",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FollowsAndSaves",
      "kind": "LinkedField",
      "name": "followsAndSaves",
      "plural": false,
      "selections": [
        {
          "alias": "artworks",
          "args": [
            {
              "kind": "Literal",
              "name": "private",
              "value": true
            }
          ],
          "concreteType": "SavedArtworksConnection",
          "kind": "LinkedField",
          "name": "__GenericGrid_artworks_connection",
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
                  "name": "startCursor",
                  "storageKey": null
                },
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
                  "name": "hasPreviousPage",
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
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SavedArtworksEdge",
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
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "GenericGrid_artworks"
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
          "storageKey": "__GenericGrid_artworks_connection(private:true)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "36aca7a9ba45b593749fc9396cb5a1b2";

export default node;
