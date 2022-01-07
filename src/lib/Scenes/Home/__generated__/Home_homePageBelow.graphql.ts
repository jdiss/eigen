/**
 * @generated SignedSource<<f82431a48ae5921ad15e1771389d3572>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_homePageBelow$data = {
  readonly recentlyViewedWorksArtworkModule: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkRail_rail">;
  } | null;
  readonly similarToRecentlyViewedArtworkModule: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkRail_rail">;
  } | null;
  readonly popularArtistsArtistModule: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistRail_rail">;
  } | null;
  readonly fairsModule: {
    readonly " $fragmentSpreads": FragmentRefs<"FairsRail_fairsModule">;
  } | null;
  readonly marketingCollectionsModule: {
    readonly " $fragmentSpreads": FragmentRefs<"CollectionsRail_collectionsModule">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"HomeHero_homePage" | "Trove_trove">;
  readonly " $fragmentType": "Home_homePageBelow";
};
export type Home_homePageBelow = Home_homePageBelow$data;
export type Home_homePageBelow$key = {
  readonly " $data"?: Home_homePageBelow$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_homePageBelow">;
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
],
v2 = [
  {
    "kind": "Variable",
    "name": "heroImageVersion",
    "variableName": "heroImageVersion"
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
  "name": "Home_homePageBelow",
  "selections": [
    {
      "alias": "recentlyViewedWorksArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "RECENTLY_VIEWED_WORKS"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "artworkModule(key:\"RECENTLY_VIEWED_WORKS\")"
    },
    {
      "alias": "similarToRecentlyViewedArtworkModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "SIMILAR_TO_RECENTLY_VIEWED"
        }
      ],
      "concreteType": "HomePageArtworkModule",
      "kind": "LinkedField",
      "name": "artworkModule",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "artworkModule(key:\"SIMILAR_TO_RECENTLY_VIEWED\")"
    },
    {
      "alias": "popularArtistsArtistModule",
      "args": [
        {
          "kind": "Literal",
          "name": "key",
          "value": "POPULAR"
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
      "storageKey": "artistModule(key:\"POPULAR\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageFairsModule",
      "kind": "LinkedField",
      "name": "fairsModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FairsRail_fairsModule"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HomePageMarketingCollectionsModule",
      "kind": "LinkedField",
      "name": "marketingCollectionsModule",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CollectionsRail_collectionsModule"
        }
      ],
      "storageKey": null
    },
    {
      "args": (v2/*: any*/),
      "kind": "FragmentSpread",
      "name": "HomeHero_homePage"
    },
    {
      "args": (v2/*: any*/),
      "kind": "FragmentSpread",
      "name": "Trove_trove"
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};
})();

(node as any).hash = "918150a193ba8e9682046443df9ab291";

export default node;
