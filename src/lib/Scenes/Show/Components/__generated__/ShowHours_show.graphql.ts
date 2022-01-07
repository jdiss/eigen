/**
 * @generated SignedSource<<8a4d87cefeec60bb765455ffa67d62b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowHours_show$data = {
  readonly id: string;
  readonly location: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowLocationHours_location">;
  } | null;
  readonly fair: {
    readonly location: {
      readonly " $fragmentSpreads": FragmentRefs<"ShowLocationHours_location">;
    } | null;
  } | null;
  readonly " $fragmentType": "ShowHours_show";
};
export type ShowHours_show = ShowHours_show$data;
export type ShowHours_show$key = {
  readonly " $data"?: ShowHours_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowHours_show">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "Location",
  "kind": "LinkedField",
  "name": "location",
  "plural": false,
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowLocationHours_location"
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowHours_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Fair",
      "kind": "LinkedField",
      "name": "fair",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};
})();

(node as any).hash = "26e72dc8fb8f47878d4892ec69a728f4";

export default node;
