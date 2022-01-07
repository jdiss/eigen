/**
 * @generated SignedSource<<67391d80199d26804ad185dbc809b5c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemInfo_item$data = {
  readonly __typename: string;
  readonly " $fragmentSpreads": FragmentRefs<"ItemArtwork_artwork" | "ItemShow_show">;
  readonly " $fragmentType": "ItemInfo_item";
};
export type ItemInfo_item = ItemInfo_item$data;
export type ItemInfo_item$key = {
  readonly " $data"?: ItemInfo_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemInfo_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemInfo_item",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemArtwork_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemShow_show"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    }
  ],
  "type": "ConversationItemType",
  "abstractKey": "__isConversationItemType"
};

(node as any).hash = "956b078440c9cc5fa596b6fe5b69c5c4";

export default node;
