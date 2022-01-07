/**
 * @generated SignedSource<<6e1947961d3d5ae6160ba94d6ef7ff2d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleListItem_sale$data = {
  readonly name: string | null;
  readonly href: string | null;
  readonly liveURLIfOpen: string | null;
  readonly liveStartAt: string | null;
  readonly displayTimelyAt: string | null;
  readonly coverImage: {
    readonly url: string | null;
  } | null;
  readonly " $fragmentType": "SaleListItem_sale";
};
export type SaleListItem_sale = SaleListItem_sale$data;
export type SaleListItem_sale$key = {
  readonly " $data"?: SaleListItem_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleListItem_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleListItem_sale",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liveURLIfOpen",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liveStartAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayTimelyAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "coverImage",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "large"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"large\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "05316e5bbded808509ab908b676ae8fe";

export default node;
