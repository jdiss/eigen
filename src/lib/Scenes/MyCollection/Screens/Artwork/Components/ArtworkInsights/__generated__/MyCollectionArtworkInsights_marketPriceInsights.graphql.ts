/**
 * @generated SignedSource<<6e955a663b0aa72a7dde853d11de248b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkInsights_marketPriceInsights$data = {
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkDemandIndex_marketPriceInsights" | "MyCollectionArtworkArtistMarket_marketPriceInsights">;
  readonly " $fragmentType": "MyCollectionArtworkInsights_marketPriceInsights";
};
export type MyCollectionArtworkInsights_marketPriceInsights = MyCollectionArtworkInsights_marketPriceInsights$data;
export type MyCollectionArtworkInsights_marketPriceInsights$key = {
  readonly " $data"?: MyCollectionArtworkInsights_marketPriceInsights$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_marketPriceInsights">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkInsights_marketPriceInsights",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkDemandIndex_marketPriceInsights"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkArtistMarket_marketPriceInsights"
    }
  ],
  "type": "MarketPriceInsights",
  "abstractKey": null
};

(node as any).hash = "ea5927acbb87b7b8241ffc13e2827a1c";

export default node;
