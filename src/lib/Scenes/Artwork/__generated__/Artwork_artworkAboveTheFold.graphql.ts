/**
 * @generated SignedSource<<bc80c6545926c3bc2471ba07333127b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Artwork_artworkAboveTheFold$data = {
  readonly slug: string;
  readonly internalID: string;
  readonly id: string;
  readonly isAcquireable: boolean | null;
  readonly isOfferable: boolean | null;
  readonly isBiddable: boolean | null;
  readonly isInquireable: boolean | null;
  readonly availability: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkHeader_artwork" | "CommercialInformation_artwork">;
  readonly " $fragmentType": "Artwork_artworkAboveTheFold";
};
export type Artwork_artworkAboveTheFold = Artwork_artworkAboveTheFold$data;
export type Artwork_artworkAboveTheFold$key = {
  readonly " $data"?: Artwork_artworkAboveTheFold$data;
  readonly " $fragmentSpreads": FragmentRefs<"Artwork_artworkAboveTheFold">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artwork_artworkAboveTheFold",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkHeader_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommercialInformation_artwork"
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
      "name": "internalID",
      "storageKey": null
    },
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
      "name": "isAcquireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isOfferable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isBiddable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInquireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availability",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "c7e0471ac09152c03d21e8f069bf80fb";

export default node;
