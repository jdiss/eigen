/**
 * @generated SignedSource<<a96f458e310d9381085e04d09884d558>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConversationDetailsQuery$variables = {
  conversationID: string;
};
export type ConversationDetailsQueryVariables = ConversationDetailsQuery$variables;
export type ConversationDetailsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"ConversationDetails_me">;
  } | null;
};
export type ConversationDetailsQueryResponse = ConversationDetailsQuery$data;
export type ConversationDetailsQuery = {
  variables: ConversationDetailsQueryVariables;
  response: ConversationDetailsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationID"
  }
],
v1 = {
  "kind": "Literal",
  "name": "first",
  "value": 30
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DESC"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  (v4/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v8 = [
  {
    "alias": "thumbnailUrl",
    "args": [
      {
        "kind": "Literal",
        "name": "version",
        "value": "small"
      }
    ],
    "kind": "ScalarField",
    "name": "url",
    "storageKey": "url(version:\"small\")"
  }
],
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v10 = [
  (v4/*: any*/)
],
v11 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v12 = [
  (v5/*: any*/),
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
    "name": "postalCode",
    "storageKey": null
  }
],
v13 = [
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
    "name": "ConversationDetailsQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "ConversationDetails_me"
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
    "name": "ConversationDetailsQuery",
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
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "conversationID"
              }
            ],
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "MessageConnection",
                "kind": "LinkedField",
                "name": "messagesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Message",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Attachment",
                            "kind": "LinkedField",
                            "name": "attachments",
                            "plural": true,
                            "selections": [
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "contentType",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fileName",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "downloadURL",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "internalID",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "messagesConnection(first:30,sort:\"DESC\")"
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "Details_messagesConnection",
                "kind": "LinkedHandle",
                "name": "messagesConnection"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationResponder",
                "kind": "LinkedField",
                "name": "to",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationItem",
                "kind": "LinkedField",
                "name": "items",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "item",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isConversationItemType"
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": (v8/*: any*/),
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
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "saleMessage",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Partner",
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": (v6/*: any*/),
                            "storageKey": null
                          },
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
                                "selections": (v9/*: any*/),
                                "type": "Money",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v9/*: any*/),
                                "type": "PriceRange",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "SHORT"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "exhibitionPeriod",
                            "storageKey": "exhibitionPeriod(format:\"SHORT\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v5/*: any*/)
                                ],
                                "type": "Partner",
                                "abstractKey": null
                              },
                              (v11/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v10/*: any*/),
                                "type": "ExternalPartner",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "image",
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "Show",
                        "abstractKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  (v1/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "states",
                    "value": [
                      "APPROVED",
                      "PENDING",
                      "SUBMITTED",
                      "FULFILLED"
                    ]
                  }
                ],
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
                            "name": "displayState",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "MMM D"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "stateExpiresAt",
                            "storageKey": "stateExpiresAt(format:\"MMM D\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "requestedFulfillment",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v12/*: any*/),
                                "type": "CommerceShip",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": (v12/*: any*/),
                                "type": "CommerceShipArta",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "buyerAction",
                                "storageKey": null
                              },
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
                                    "args": (v13/*: any*/),
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
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "CommerceOfferOrder",
                            "abstractKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
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
                                          (v4/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v4/*: any*/),
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
                                            "kind": "ScalarField",
                                            "name": "shippingOrigin",
                                            "storageKey": null
                                          },
                                          (v4/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
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
                            "args": (v13/*: any*/),
                            "kind": "ScalarField",
                            "name": "shippingTotal",
                            "storageKey": "shippingTotal(precision:2)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "kind": "ScalarField",
                            "name": "taxTotal",
                            "storageKey": "taxTotal(precision:2)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "kind": "ScalarField",
                            "name": "buyerTotal",
                            "storageKey": "buyerTotal(precision:2)"
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
                                "name": "lastDigits",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "expirationMonth",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "expirationYear",
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:30,states:[\"APPROVED\",\"PENDING\",\"SUBMITTED\",\"FULFILLED\"])"
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0f29d1ab50da2a550a3bba294f3e822d",
    "id": null,
    "metadata": {},
    "name": "ConversationDetailsQuery",
    "operationKind": "query",
    "text": "query ConversationDetailsQuery(\n  $conversationID: String!\n) {\n  me {\n    ...ConversationDetails_me\n    id\n  }\n}\n\nfragment AttachmentList_conversation on Conversation {\n  messagesConnection(first: 30, sort: DESC) {\n    edges {\n      node {\n        __typename\n        attachments {\n          id\n          contentType\n          ...FileDownload_attachment\n        }\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AttachmentPreview_attachment on Attachment {\n  internalID\n}\n\nfragment ConversationDetails_me on Me {\n  conversation(id: $conversationID) {\n    ...AttachmentList_conversation\n    to {\n      name\n      id\n    }\n    items {\n      item {\n        __typename\n        ...ItemInfo_item\n        ...OrderInformation_artwork\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    orderConnection(first: 30, states: [APPROVED, PENDING, SUBMITTED, FULFILLED]) {\n      edges {\n        node {\n          __typename\n          ...SellerReplyEstimate_order\n          ...OrderInformation_order\n          ...Shipping_order\n          ...PaymentMethod_order\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment FileDownload_attachment on Attachment {\n  fileName\n  downloadURL\n  ...AttachmentPreview_attachment\n}\n\nfragment ItemArtwork_artwork on Artwork {\n  href\n  image {\n    thumbnailUrl: url(version: \"small\")\n  }\n  title\n  artistNames\n  date\n  saleMessage\n  partner {\n    name\n    id\n  }\n}\n\nfragment ItemInfo_item on ConversationItemType {\n  __isConversationItemType: __typename\n  ...ItemArtwork_artwork\n  ...ItemShow_show\n  __typename\n}\n\nfragment ItemShow_show on Show {\n  name\n  href\n  exhibitionPeriod(format: SHORT)\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n    ... on ExternalPartner {\n      id\n    }\n  }\n  image: coverImage {\n    thumbnailUrl: url(version: \"small\")\n  }\n}\n\nfragment OrderInformation_artwork on Artwork {\n  listPrice {\n    __typename\n    ... on Money {\n      display\n    }\n    ... on PriceRange {\n      display\n    }\n  }\n}\n\nfragment OrderInformation_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  code\n  shippingTotal(precision: 2)\n  taxTotal(precision: 2)\n  buyerTotal(precision: 2)\n  ... on CommerceOfferOrder {\n    lastOffer {\n      amount(precision: 2)\n      fromParticipant\n      id\n    }\n  }\n}\n\nfragment PaymentMethod_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  creditCard {\n    lastDigits\n    expirationMonth\n    expirationYear\n    id\n  }\n}\n\nfragment SellerReplyEstimate_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  displayState\n  stateExpiresAt(format: \"MMM D\")\n  requestedFulfillment {\n    __typename\n  }\n  ... on CommerceOfferOrder {\n    buyerAction\n  }\n  lineItems {\n    edges {\n      node {\n        selectedShippingQuote {\n          displayName\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Shipping_order on CommerceOrder {\n  __isCommerceOrder: __typename\n  requestedFulfillment {\n    __typename\n    ... on CommerceShip {\n      name\n      addressLine1\n      city\n      country\n      postalCode\n    }\n    ... on CommerceShipArta {\n      name\n      addressLine1\n      city\n      country\n      postalCode\n    }\n  }\n  lineItems {\n    edges {\n      node {\n        artwork {\n          shippingOrigin\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "464d6ba7c5353c651e81dc601cfa0b42";

export default node;
