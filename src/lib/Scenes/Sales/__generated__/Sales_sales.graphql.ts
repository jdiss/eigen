/**
 * @generated SignedSource<<26e65e6a2573f78287bdb39d06a1a835>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Sales_sales$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly live_start_at: string | null;
      readonly " $fragmentSpreads": FragmentRefs<"SaleListItem_sale">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "Sales_sales";
};
export type Sales_sales = Sales_sales$data;
export type Sales_sales$key = {
  readonly " $data"?: Sales_sales$data;
  readonly " $fragmentSpreads": FragmentRefs<"Sales_sales">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Sales_sales",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Sale",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SaleListItem_sale"
            },
            {
              "alias": "live_start_at",
              "args": null,
              "kind": "ScalarField",
              "name": "liveStartAt",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SaleConnection",
  "abstractKey": null
};

(node as any).hash = "cc3a203ba7ba157f6de5cb954d6c1e6f";

export default node;
