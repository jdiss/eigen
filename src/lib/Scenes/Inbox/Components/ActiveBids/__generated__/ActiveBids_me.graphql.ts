/**
 * @generated SignedSource<<5e8c3b6aa69e0fd2f1ab2d9bd59fa56f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActiveBids_me$data = {
  readonly lot_standings: ReadonlyArray<{
    readonly most_recent_bid: {
      readonly id: string;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"ActiveBid_bid">;
  } | null> | null;
  readonly " $fragmentType": "ActiveBids_me";
};
export type ActiveBids_me = ActiveBids_me$data;
export type ActiveBids_me$key = {
  readonly " $data"?: ActiveBids_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActiveBids_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActiveBids_me",
  "selections": [
    {
      "alias": "lot_standings",
      "args": [
        {
          "kind": "Literal",
          "name": "live",
          "value": true
        }
      ],
      "concreteType": "LotStanding",
      "kind": "LinkedField",
      "name": "lotStandings",
      "plural": true,
      "selections": [
        {
          "alias": "most_recent_bid",
          "args": null,
          "concreteType": "BidderPosition",
          "kind": "LinkedField",
          "name": "mostRecentBid",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ActiveBid_bid"
        }
      ],
      "storageKey": "lotStandings(live:true)"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "c3631fca7fb83f55a6d2695da1956e88";

export default node;
