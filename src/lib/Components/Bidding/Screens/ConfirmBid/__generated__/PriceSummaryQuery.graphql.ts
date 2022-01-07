/**
 * @generated SignedSource<<064022be86d538abad891a1cbc184dbf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PriceSummaryQuery$variables = {
  saleArtworkId: string;
  bidAmountMinor: number;
};
export type PriceSummaryQueryVariables = PriceSummaryQuery$variables;
export type PriceSummaryQuery$data = {
  readonly node: {
    readonly calculatedCost?: {
      readonly " $fragmentSpreads": FragmentRefs<"PriceSummary_calculatedCost">;
    } | null;
  } | null;
};
export type PriceSummaryQueryResponse = PriceSummaryQuery$data;
export type PriceSummaryQuery = {
  variables: PriceSummaryQueryVariables;
  response: PriceSummaryQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bidAmountMinor"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "saleArtworkId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "saleArtworkId"
  }
],
v3 = [
  {
    "kind": "Variable",
    "name": "bidAmountMinor",
    "variableName": "bidAmountMinor"
  }
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PriceSummaryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "CalculatedCost",
                "kind": "LinkedField",
                "name": "calculatedCost",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "PriceSummary_calculatedCost"
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "SaleArtwork",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PriceSummaryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "CalculatedCost",
                "kind": "LinkedField",
                "name": "calculatedCost",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Money",
                    "kind": "LinkedField",
                    "name": "buyersPremium",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Money",
                    "kind": "LinkedField",
                    "name": "subtotal",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "SaleArtwork",
            "abstractKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7af9de55f980032273aebd3520659b05",
    "id": null,
    "metadata": {},
    "name": "PriceSummaryQuery",
    "operationKind": "query",
    "text": "query PriceSummaryQuery(\n  $saleArtworkId: ID!\n  $bidAmountMinor: Int!\n) {\n  node(id: $saleArtworkId) {\n    __typename\n    ... on SaleArtwork {\n      calculatedCost(bidAmountMinor: $bidAmountMinor) {\n        ...PriceSummary_calculatedCost\n      }\n    }\n    id\n  }\n}\n\nfragment PriceSummary_calculatedCost on CalculatedCost {\n  buyersPremium {\n    display\n  }\n  subtotal {\n    display\n  }\n}\n"
  }
};
})();

(node as any).hash = "3128ecf4576bceace268984d3b56f9c4";

export default node;
