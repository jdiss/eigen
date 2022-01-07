/**
 * @generated SignedSource<<66ec82f0a764a327dd3e1a859146f2a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_homePageAbove$data = {
  readonly followedArtistsArtworkModule: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkRail_rail">;
  } | null;
  readonly activeBidsArtworkModule: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkRail_rail">;
  } | null;
  readonly salesModule: {
    readonly " $fragmentSpreads": FragmentRefs<"SalesRail_salesModule">;
  } | null;
  readonly recommendedArtistsArtistModule: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistRail_rail">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"HomeHero_homePage">;
  readonly " $fragmentType": "Home_homePageAbove";
};
export type Home_homePageAbove = Home_homePageAbove$data;
export type Home_homePageAbove$key = {
  readonly " $data"?: Home_homePageAbove$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_homePageAbove">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ArtworkRail_rail"
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "heroImageVersion"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_homePageAbove",
  "selections": [
    {
      "alias": "followedArtistsArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "FOLLOWED_ARTISTS"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "artworkModule(key:\"FOLLOWED_ARTISTS\")"
    },
    {
      "alias": "activeBidsArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "ACTIVE_BIDS"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "artworkModule(key:\"ACTIVE_BIDS\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageSalesModule",
      "kind": "LinkedField",
      "name": "salesModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SalesRail_salesModule"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "recommendedArtistsArtistModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "SUGGESTED"
        }
      ],
      "concreteType": "HomePageArtistModule",
      "kind": "LinkedField",
      "name": "artistModule",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistRail_rail"
        }
      ],
      "storageKey": "artistModule(key:\"SUGGESTED\")"
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "heroImageVersion",
          "variableName": "heroImageVersion"
        }
      ],
      "kind": "FragmentSpread",
      "name": "HomeHero_homePage"
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};
})();

(node as any).hash = "b6644ded9b5e028ed28662fa2d2512f3";

export default node;
