/**
 * @generated SignedSource<<c10cf103a2fefedb70e0cb34d22a3758>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionResultsRail_me$data = {
  readonly auctionResultsByFollowedArtists: {
    readonly totalCount: number | null;
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly artistID: string;
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"AuctionResultListItem_auctionResult">;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "AuctionResultsRail_me";
};
export type AuctionResultsRail_me = AuctionResultsRail_me$data;
export type AuctionResultsRail_me$key = {
  readonly " $data"?: AuctionResultsRail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuctionResultsRail_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuctionResultsRail_me",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3
        }
      ],
      "concreteType": "AuctionResultConnection",
      "kind": "LinkedField",
      "name": "auctionResultsByFollowedArtists",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AuctionResultEdge",
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
              "concreteType": "AuctionResult",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AuctionResultListItem_auctionResult"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "artistID",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "auctionResultsByFollowedArtists(first:3)"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "cf7079894134d7ded2654593eac9f58c";

export default node;
