/**
 * @generated SignedSource<<2132fd419d2afdb31c3c8a6796059fc8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDetailsQuery$variables = {
  orderID: string;
};
export type OrderDetailsQueryVariables = OrderDetailsQuery$variables;
export type OrderDetailsQuery$data = {
  readonly order: {
    readonly " $fragmentSpreads": FragmentRefs<"OrderDetails_order">;
  } | null;
};
export type OrderDetailsQueryResponse = OrderDetailsQuery$data;
export type OrderDetailsQuery = {
  variables: OrderDetailsQueryVariables;
  response: OrderDetailsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "orderID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "addressLine1",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "addressLine2",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "city",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "country",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "phoneNumber",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "postalCode",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "region",
    "storageKey": null
  }
],
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderDetailsQuery",
    "selections": [
      {
        "alias": "order",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrderDetails_order"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrderDetailsQuery",
    "selections": [
      {
        "alias": "order",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "commerceOrder",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isCommerceOrder"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "requestedFulfillment",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "CommerceShip",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "CommerceShipArta",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "CommerceLineItemConnection",
            "kind": "LinkedField",
            "name": "lineItems",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CommerceLineItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CommerceLineItem",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "artwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Partner",
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "medium",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "editionOf",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "dimensions",
                            "kind": "LinkedField",
                            "name": "dimensions",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "in",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "cm",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "square60"
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": "url(version:\"square60\")"
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artistNames",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "shippingOrigin",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceShipment",
                        "kind": "LinkedField",
                        "name": "shipment",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "status",
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "trackingUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "trackingNumber",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deliveryStart",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deliveryEnd",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "estimatedDeliveryWindow",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CommerceShippingQuote",
                        "kind": "LinkedField",
                        "name": "selectedShippingQuote",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "displayName",
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "concreteType": "CommerceFulfillmentConnection",
                        "kind": "LinkedField",
                        "name": "fulfillments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommerceFulfillmentEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "CommerceFulfillment",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v7/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "trackingId",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "estimatedDelivery",
                                    "storageKey": null
                                  },
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "fulfillments(first:1)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "lineItems(first:1)"
          },
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "kind": "ScalarField",
            "name": "buyerTotal",
            "storageKey": "buyerTotal(precision:2)"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "kind": "ScalarField",
            "name": "taxTotal",
            "storageKey": "taxTotal(precision:2)"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "kind": "ScalarField",
            "name": "shippingTotal",
            "storageKey": "shippingTotal(precision:2)"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "kind": "ScalarField",
            "name": "totalListPrice",
            "storageKey": "totalListPrice(precision:2)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CreditCard",
            "kind": "LinkedField",
            "name": "creditCard",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "brand",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastDigits",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
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
                    "args": (v8/*: any*/),
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
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "CommerceOfferOrder",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c14260a83f530dba6bb284d9de04736f",
    "id": null,
    "metadata": {},
    "name": "OrderDetailsQuery",
    "operationKind": "query",
    "text": "query OrderDetailsQuery(\n  $orderID: ID!\n) {\n  order: commerceOrder(id: $orderID) @optionalField {\n    __typename\n    ...OrderDetails_order\n    id\n  }\n}\n\nfragment ArtworkInfoSection_artwork on CommerceOrder {\n  __isCommerceOrder: __typename\n  lineItems(first: 1) {\n    edges {\n      node {\n        artwork {\n          medium\n          editionOf\n          dimensions {\n            in\n            cm\n          }\n          date\n          image {\n            url(version: \"square60\")\n          }\n          title\n          artistNames\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrderDetailsHeader_info on CommerceOrder {\n  __isCommerceOrder: __typename\n  createdAt\n  code\n  state\n  requestedFulfillment {\n    __typename\n    ... on CommerceShip {\n      __typename\n    }\n    ... on CommercePickup {\n      __typename\n    }\n    ... on CommerceShipArta {\n      __typename\n    }\n  }\n  lineItems(first: 1) {\n    edges {\n      node {\n        shipment {\n          status\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrderDetailsPayment_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  creditCard {\n    brand\n    lastDigits\n    id\n  }\n}\n\nfragment OrderDetails_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommerceShip {\n      __typename\n      name\n    }\n    ... on CommerceShipArta {\n      __typename\n      name\n    }\n    ... on CommercePickup {\n      __typename\n    }\n  }\n  lineItems(first: 1) {\n    edges {\n      node {\n        artwork {\n          partner {\n            name\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  ...OrderDetailsHeader_info\n  ...ArtworkInfoSection_artwork\n  ...SummarySection_section\n  ...OrderDetailsPayment_order\n  ...TrackOrderSection_section\n  ...ShipsToSection_address\n  ...SoldBySection_soldBy\n}\n\nfragment ShipsToSection_address on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommercePickup {\n      __typename\n    }\n    ... on CommerceShip {\n      __typename\n      addressLine1\n      addressLine2\n      city\n      country\n      phoneNumber\n      postalCode\n      region\n    }\n    ... on CommerceShipArta {\n      __typename\n      addressLine1\n      addressLine2\n      city\n      country\n      phoneNumber\n      postalCode\n      region\n    }\n  }\n}\n\nfragment SoldBySection_soldBy on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommercePickup {\n      __typename\n    }\n  }\n  lineItems(first: 1) {\n    edges {\n      node {\n        artwork {\n          shippingOrigin\n          id\n        }\n        fulfillments(first: 1) {\n          edges {\n            node {\n              estimatedDelivery\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment SummarySection_section on CommerceOrder {\n  __isCommerceOrder: __typename\n  mode\n  buyerTotal(precision: 2)\n  taxTotal(precision: 2)\n  shippingTotal(precision: 2)\n  totalListPrice(precision: 2)\n  lineItems(first: 1) {\n    edges {\n      node {\n        selectedShippingQuote {\n          displayName\n          id\n        }\n        id\n      }\n    }\n  }\n  ... on CommerceOfferOrder {\n    lastOffer {\n      amount(precision: 2)\n      fromParticipant\n      id\n    }\n  }\n}\n\nfragment TrackOrderSection_section on CommerceOrder {\n  __isCommerceOrder: __typename\n  state\n  lineItems(first: 1) {\n    edges {\n      node {\n        shipment {\n          status\n          trackingUrl\n          trackingNumber\n          deliveryStart\n          deliveryEnd\n          estimatedDeliveryWindow\n          id\n        }\n        fulfillments(first: 1) {\n          edges {\n            node {\n              createdAt\n              trackingId\n              estimatedDelivery\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "78a45d07254f75b83d02cc72ff3db214";

export default node;
