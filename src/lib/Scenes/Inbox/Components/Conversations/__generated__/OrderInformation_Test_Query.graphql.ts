/**
 * @generated SignedSource<<37448f39eee084a7a061976ae850c274>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderInformation_Test_Query$variables = {};
export type OrderInformation_Test_QueryVariables = OrderInformation_Test_Query$variables;
export type OrderInformation_Test_Query$data = {
  readonly me: {
    readonly conversation: {
      readonly orderConnection: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly " $fragmentSpreads": FragmentRefs<"OrderInformation_order">;
          } | null;
        } | null> | null;
      } | null;
    } | null;
  } | null;
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"OrderInformation_artwork">;
  } | null;
};
export type OrderInformation_Test_QueryResponse = OrderInformation_Test_Query$data;
export type OrderInformation_Test_Query = {
  variables: OrderInformation_Test_QueryVariables;
  response: OrderInformation_Test_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-id"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-artwork"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderInformation_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "CommerceOrderConnectionWithTotalCount",
                "kind": "LinkedField",
                "name": "orderConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceOrderEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "OrderInformation_order"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10)"
              }
            ],
            "storageKey": "conversation(id:\"test-id\")"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrderInformation_artwork"
          }
        ],
        "storageKey": "artwork(id:\"test-artwork\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OrderInformation_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "CommerceOrderConnectionWithTotalCount",
                "kind": "LinkedField",
                "name": "orderConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceOrderEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isCommerceOrder"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "code",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "kind": "ScalarField",
                            "name": "shippingTotal",
                            "storageKey": "shippingTotal(precision:2)"
                          },
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "kind": "ScalarField",
                            "name": "taxTotal",
                            "storageKey": "taxTotal(precision:2)"
                          },
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "kind": "ScalarField",
                            "name": "buyerTotal",
                            "storageKey": "buyerTotal(precision:2)"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceOffer",
                                "kind": "LinkedField",
                                "name": "lastOffer",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": (v4/*: any*/),
                                    "kind": "ScalarField",
                                    "name": "amount",
                                    "storageKey": "amount(precision:2)"
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "fromParticipant",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "CommerceOfferOrder",
                            "abstractKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10)"
              },
              (v5/*: any*/)
            ],
            "storageKey": "conversation(id:\"test-id\")"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "listPrice",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v6/*: any*/),
                "type": "Money",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v6/*: any*/),
                "type": "PriceRange",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": "artwork(id:\"test-artwork\")"
      }
    ]
  },
  "params": {
    "cacheID": "515409a62cdec6b734da0a804d4f5bfb",
    "id": null,
    "metadata": {},
    "name": "OrderInformation_Test_Query",
    "operationKind": "query",
    "text": "query OrderInformation_Test_Query {\n  me {\n    conversation(id: \"test-id\") {\n      orderConnection(first: 10) {\n        edges {\n          node {\n            __typename\n            ...OrderInformation_order\n            id\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n  artwork(id: \"test-artwork\") {\n    ...OrderInformation_artwork\n    id\n  }\n}\n\nfragment OrderInformation_artwork on Artwork {\n  listPrice {\n    __typename\n    ... on Money {\n      display\n    }\n    ... on PriceRange {\n      display\n    }\n  }\n}\n\nfragment OrderInformation_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  code\n  shippingTotal(precision: 2)\n  taxTotal(precision: 2)\n  buyerTotal(precision: 2)\n  ... on CommerceOfferOrder {\n    lastOffer {\n      amount(precision: 2)\n      fromParticipant\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "67bab0803414abfe42ae648a0f97ef51";

export default node;
