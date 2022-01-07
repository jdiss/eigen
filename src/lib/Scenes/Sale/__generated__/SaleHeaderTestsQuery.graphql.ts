/**
 * @generated SignedSource<<a6633f852b430c4827d87c3d52d0f1b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleHeaderTestsQuery$variables = {};
export type SaleHeaderTestsQueryVariables = SaleHeaderTestsQuery$variables;
export type SaleHeaderTestsQuery$data = {
  readonly sale: {
    readonly " $fragmentSpreads": FragmentRefs<"SaleHeader_sale">;
  } | null;
};
export type SaleHeaderTestsQueryResponse = SaleHeaderTestsQuery$data;
export type SaleHeaderTestsQuery = {
  variables: SaleHeaderTestsQueryVariables;
  response: SaleHeaderTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "the-sale"
  }
],
v1 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SaleHeader_sale"
          }
        ],
        "storageKey": "sale(id:\"the-sale\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SaleHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
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
            "name": "slug",
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
            "name": "endAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "startAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "timeZone",
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
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "sale(id:\"the-sale\")"
      }
    ]
  },
  "params": {
    "cacheID": "faf5ffa6c0fd866c4c321e2767a36810",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "sale.coverImage": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "sale.coverImage.url": (v1/*: any*/),
        "sale.endAt": (v1/*: any*/),
        "sale.id": (v2/*: any*/),
        "sale.liveStartAt": (v1/*: any*/),
        "sale.name": (v1/*: any*/),
        "sale.slug": (v2/*: any*/),
        "sale.startAt": (v1/*: any*/),
        "sale.timeZone": (v1/*: any*/)
      }
    },
    "name": "SaleHeaderTestsQuery",
    "operationKind": "query",
    "text": "query SaleHeaderTestsQuery {\n  sale(id: \"the-sale\") {\n    ...SaleHeader_sale\n    id\n  }\n}\n\nfragment SaleHeader_sale on Sale {\n  name\n  slug\n  liveStartAt\n  endAt\n  startAt\n  timeZone\n  coverImage {\n    url\n  }\n}\n"
  }
};
})();

(node as any).hash = "b9e8153d2ce7a746c081f6450eb14cff";

export default node;
