/**
 * @generated SignedSource<<e89c0cd7fdbf8be1c0227be5221c84fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConversationTestsQuery$variables = {
  conversationID: string;
};
export type ConversationTestsQueryVariables = ConversationTestsQuery$variables;
export type ConversationTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"Conversation_me">;
  } | null;
};
export type ConversationTestsQueryResponse = ConversationTestsQuery$data;
export type ConversationTestsQuery = {
  variables: ConversationTestsQueryVariables;
  response: ConversationTestsQuery$data;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "aspectRatio",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  (v6/*: any*/)
],
v8 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = [
  (v9/*: any*/),
  (v6/*: any*/)
],
v11 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stateReason",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fromParticipant",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "definesTotal",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "offerAmountChanged",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v19 = [
  (v11/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DESC"
  }
],
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOrderConnectionWithTotalCount"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "CommerceOrderEdge"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOrder"
},
v23 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v24 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v25 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CommerceOffer"
},
v26 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v27 = {
  "enumValues": [
    "BUYER",
    "SELLER"
  ],
  "nullable": true,
  "plural": false,
  "type": "CommerceOrderParticipantEnum"
},
v28 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v29 = {
  "enumValues": [
    "ABANDONED",
    "APPROVED",
    "CANCELED",
    "FULFILLED",
    "PENDING",
    "REFUNDED",
    "SUBMITTED"
  ],
  "nullable": false,
  "plural": false,
  "type": "CommerceOrderStateEnum"
},
v30 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v31 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ID"
},
v32 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ConversationItemType"
},
v33 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v34 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConversationTestsQuery",
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
            "name": "Conversation_me"
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
    "name": "ConversationTestsQuery",
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
                "alias": "conversationID",
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
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
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "artworkID",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "internalID",
                            "storageKey": null
                          },
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
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
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      (v8/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Fair",
                            "kind": "LinkedField",
                            "name": "fair",
                            "plural": false,
                            "selections": (v10/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "partner",
                            "plural": false,
                            "selections": [
                              (v1/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v9/*: any*/)
                                ],
                                "type": "Partner",
                                "abstractKey": null
                              },
                              (v8/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v7/*: any*/),
                                "type": "ExternalPartner",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Show",
                        "abstractKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "liveArtwork",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isOfferableFromInquiry",
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "activeOrders",
                "args": [
                  (v11/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "states",
                    "value": [
                      "APPROVED",
                      "FULFILLED",
                      "SUBMITTED",
                      "REFUNDED"
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
                          (v1/*: any*/),
                          (v4/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "stateExpiresAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lastTransactionFailed",
                            "storageKey": null
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
                                  (v14/*: any*/),
                                  (v15/*: any*/),
                                  (v16/*: any*/),
                                  (v17/*: any*/),
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "first",
                                    "value": 5
                                  }
                                ],
                                "concreteType": "CommerceOfferConnection",
                                "kind": "LinkedField",
                                "name": "offers",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommerceOfferEdge",
                                    "kind": "LinkedField",
                                    "name": "edges",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommerceOffer",
                                        "kind": "LinkedField",
                                        "name": "node",
                                        "plural": false,
                                        "selections": [
                                          (v4/*: any*/),
                                          (v6/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "offers(first:5)"
                              }
                            ],
                            "type": "CommerceOfferOrder",
                            "abstractKey": null
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "orderConnection(first:10,states:[\"APPROVED\",\"FULFILLED\",\"SUBMITTED\",\"REFUNDED\"])"
              },
              (v6/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationInitiator",
                "kind": "LinkedField",
                "name": "from",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v18/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationResponder",
                "kind": "LinkedField",
                "name": "to",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "initialMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastMessageID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  (v11/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "participantType",
                    "value": "BUYER"
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
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "orderHistory",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "TypeDiscriminator",
                                "abstractKey": "__isCommerceOrderEventUnion"
                              },
                              (v1/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v15/*: any*/),
                                  (v13/*: any*/),
                                  (v12/*: any*/)
                                ],
                                "type": "CommerceOrderStateChangedEvent",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v15/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "CommerceOffer",
                                    "kind": "LinkedField",
                                    "name": "offer",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "amount",
                                        "storageKey": null
                                      },
                                      (v14/*: any*/),
                                      (v16/*: any*/),
                                      (v17/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommerceOffer",
                                        "kind": "LinkedField",
                                        "name": "respondsTo",
                                        "plural": false,
                                        "selections": [
                                          (v14/*: any*/),
                                          (v6/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v6/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "CommerceOfferSubmittedEvent",
                                "abstractKey": null
                              }
                            ],
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
                "storageKey": "orderConnection(first:10,participantType:\"BUYER\")"
              },
              {
                "alias": null,
                "args": (v19/*: any*/),
                "concreteType": "MessageConnection",
                "kind": "LinkedField",
                "name": "messagesConnection",
                "plural": false,
                "selections": [
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
                        "name": "startCursor",
                        "storageKey": null
                      },
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
                        "name": "hasPreviousPage",
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
                  },
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
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Message",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v6/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isFromUser",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isFirstMessage",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "body",
                            "storageKey": null
                          },
                          (v15/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Attachment",
                            "kind": "LinkedField",
                            "name": "attachments",
                            "plural": true,
                            "selections": [
                              (v6/*: any*/),
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
                                "name": "downloadURL",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fileName",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "MessageInitiator",
                            "kind": "LinkedField",
                            "name": "from",
                            "plural": false,
                            "selections": [
                              (v9/*: any*/),
                              (v18/*: any*/)
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
                "storageKey": "messagesConnection(first:10,sort:\"DESC\")"
              },
              {
                "alias": null,
                "args": (v19/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "Messages_messagesConnection",
                "kind": "LinkedHandle",
                "name": "messagesConnection"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "unread",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "46b093fec44bc540bc991a0597186bef",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.conversation": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Conversation"
        },
        "me.conversation.activeOrders": (v20/*: any*/),
        "me.conversation.activeOrders.edges": (v21/*: any*/),
        "me.conversation.activeOrders.edges.node": (v22/*: any*/),
        "me.conversation.activeOrders.edges.node.__typename": (v23/*: any*/),
        "me.conversation.activeOrders.edges.node.id": (v24/*: any*/),
        "me.conversation.activeOrders.edges.node.internalID": (v24/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer": (v25/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.createdAt": (v23/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.definesTotal": (v26/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.fromParticipant": (v27/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.id": (v24/*: any*/),
        "me.conversation.activeOrders.edges.node.lastOffer.offerAmountChanged": (v26/*: any*/),
        "me.conversation.activeOrders.edges.node.lastTransactionFailed": (v28/*: any*/),
        "me.conversation.activeOrders.edges.node.offers": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOfferConnection"
        },
        "me.conversation.activeOrders.edges.node.offers.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceOfferEdge"
        },
        "me.conversation.activeOrders.edges.node.offers.edges.node": (v25/*: any*/),
        "me.conversation.activeOrders.edges.node.offers.edges.node.id": (v24/*: any*/),
        "me.conversation.activeOrders.edges.node.offers.edges.node.internalID": (v24/*: any*/),
        "me.conversation.activeOrders.edges.node.state": (v29/*: any*/),
        "me.conversation.activeOrders.edges.node.stateExpiresAt": (v30/*: any*/),
        "me.conversation.activeOrders.edges.node.stateReason": (v30/*: any*/),
        "me.conversation.conversationID": (v31/*: any*/),
        "me.conversation.from": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationInitiator"
        },
        "me.conversation.from.email": (v23/*: any*/),
        "me.conversation.from.id": (v24/*: any*/),
        "me.conversation.from.name": (v23/*: any*/),
        "me.conversation.id": (v24/*: any*/),
        "me.conversation.initialMessage": (v23/*: any*/),
        "me.conversation.internalID": (v31/*: any*/),
        "me.conversation.items": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationItem"
        },
        "me.conversation.items.item": (v32/*: any*/),
        "me.conversation.items.item.__isNode": (v23/*: any*/),
        "me.conversation.items.item.__typename": (v23/*: any*/),
        "me.conversation.items.item.artistNames": (v30/*: any*/),
        "me.conversation.items.item.artworkID": (v24/*: any*/),
        "me.conversation.items.item.coverImage": (v33/*: any*/),
        "me.conversation.items.item.coverImage.aspectRatio": (v34/*: any*/),
        "me.conversation.items.item.coverImage.url": (v30/*: any*/),
        "me.conversation.items.item.date": (v30/*: any*/),
        "me.conversation.items.item.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "me.conversation.items.item.fair.id": (v24/*: any*/),
        "me.conversation.items.item.fair.name": (v30/*: any*/),
        "me.conversation.items.item.href": (v30/*: any*/),
        "me.conversation.items.item.id": (v24/*: any*/),
        "me.conversation.items.item.image": (v33/*: any*/),
        "me.conversation.items.item.image.aspectRatio": (v34/*: any*/),
        "me.conversation.items.item.image.url": (v30/*: any*/),
        "me.conversation.items.item.internalID": (v24/*: any*/),
        "me.conversation.items.item.name": (v30/*: any*/),
        "me.conversation.items.item.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "me.conversation.items.item.partner.__isNode": (v23/*: any*/),
        "me.conversation.items.item.partner.__typename": (v23/*: any*/),
        "me.conversation.items.item.partner.id": (v24/*: any*/),
        "me.conversation.items.item.partner.name": (v30/*: any*/),
        "me.conversation.items.item.slug": (v24/*: any*/),
        "me.conversation.items.item.title": (v30/*: any*/),
        "me.conversation.items.liveArtwork": (v32/*: any*/),
        "me.conversation.items.liveArtwork.__isNode": (v23/*: any*/),
        "me.conversation.items.liveArtwork.__typename": (v23/*: any*/),
        "me.conversation.items.liveArtwork.id": (v24/*: any*/),
        "me.conversation.items.liveArtwork.internalID": (v24/*: any*/),
        "me.conversation.items.liveArtwork.isOfferableFromInquiry": (v28/*: any*/),
        "me.conversation.lastMessageID": (v30/*: any*/),
        "me.conversation.messagesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageConnection"
        },
        "me.conversation.messagesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "MessageEdge"
        },
        "me.conversation.messagesConnection.edges.cursor": (v23/*: any*/),
        "me.conversation.messagesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Message"
        },
        "me.conversation.messagesConnection.edges.node.__typename": (v23/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Attachment"
        },
        "me.conversation.messagesConnection.edges.node.attachments.contentType": (v23/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.downloadURL": (v23/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.fileName": (v23/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.id": (v24/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.internalID": (v24/*: any*/),
        "me.conversation.messagesConnection.edges.node.body": (v30/*: any*/),
        "me.conversation.messagesConnection.edges.node.createdAt": (v30/*: any*/),
        "me.conversation.messagesConnection.edges.node.from": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageInitiator"
        },
        "me.conversation.messagesConnection.edges.node.from.email": (v30/*: any*/),
        "me.conversation.messagesConnection.edges.node.from.name": (v30/*: any*/),
        "me.conversation.messagesConnection.edges.node.id": (v24/*: any*/),
        "me.conversation.messagesConnection.edges.node.internalID": (v24/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFirstMessage": (v28/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFromUser": (v28/*: any*/),
        "me.conversation.messagesConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.conversation.messagesConnection.pageInfo.endCursor": (v30/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasNextPage": (v26/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasPreviousPage": (v26/*: any*/),
        "me.conversation.messagesConnection.pageInfo.startCursor": (v30/*: any*/),
        "me.conversation.orderConnection": (v20/*: any*/),
        "me.conversation.orderConnection.edges": (v21/*: any*/),
        "me.conversation.orderConnection.edges.node": (v22/*: any*/),
        "me.conversation.orderConnection.edges.node.__typename": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.id": (v24/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "CommerceOrderEventUnion"
        },
        "me.conversation.orderConnection.edges.node.orderHistory.__isCommerceOrderEventUnion": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.__typename": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.createdAt": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "CommerceOffer"
        },
        "me.conversation.orderConnection.edges.node.orderHistory.offer.amount": (v30/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.definesTotal": (v26/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.fromParticipant": (v27/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.id": (v24/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.offerAmountChanged": (v26/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo": (v25/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo.fromParticipant": (v27/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo.id": (v24/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.state": (v29/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.stateReason": (v30/*: any*/),
        "me.conversation.to": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationResponder"
        },
        "me.conversation.to.id": (v24/*: any*/),
        "me.conversation.to.name": (v23/*: any*/),
        "me.conversation.unread": (v28/*: any*/),
        "me.id": (v24/*: any*/)
      }
    },
    "name": "ConversationTestsQuery",
    "operationKind": "query",
    "text": "query ConversationTestsQuery(\n  $conversationID: String!\n) {\n  me {\n    ...Conversation_me\n    id\n  }\n}\n\nfragment ArtworkPreview_artwork on Artwork {\n  slug\n  internalID\n  title\n  artistNames\n  date\n  image {\n    url\n    aspectRatio\n  }\n}\n\nfragment AttachmentPreview_attachment on Attachment {\n  internalID\n}\n\nfragment Composer_conversation on Conversation {\n  ...ConversationCTA_conversation\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        href\n        slug\n      }\n      ... on Show {\n        href\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ConversationCTA_conversation on Conversation {\n  conversationID: internalID\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        artworkID: internalID\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    liveArtwork {\n      __typename\n      ... on Artwork {\n        isOfferableFromInquiry\n        internalID\n        __typename\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  activeOrders: orderConnection(first: 10, states: [APPROVED, FULFILLED, SUBMITTED, REFUNDED]) {\n    edges {\n      node {\n        __typename\n        internalID\n        state\n        stateReason\n        stateExpiresAt\n        lastTransactionFailed\n        ... on CommerceOfferOrder {\n          lastOffer {\n            fromParticipant\n            createdAt\n            definesTotal\n            offerAmountChanged\n            id\n          }\n          offers(first: 5) {\n            edges {\n              node {\n                internalID\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment Conversation_me on Me {\n  conversation(id: $conversationID) {\n    ...Composer_conversation\n    ...Messages_conversation\n    internalID\n    id\n    lastMessageID\n    unread\n    to {\n      name\n      id\n    }\n    from {\n      email\n      id\n    }\n  }\n}\n\nfragment FileDownload_attachment on Attachment {\n  fileName\n  downloadURL\n  ...AttachmentPreview_attachment\n}\n\nfragment ImagePreview_attachment on Attachment {\n  downloadURL\n  ...AttachmentPreview_attachment\n}\n\nfragment Message_message on Message {\n  __typename\n  body\n  createdAt\n  internalID\n  isFromUser\n  isFirstMessage\n  from {\n    name\n    email\n  }\n  attachments {\n    id\n    internalID\n    contentType\n    downloadURL\n    fileName\n    ...PDFPreview_attachment\n    ...ImagePreview_attachment\n    ...FileDownload_attachment\n  }\n}\n\nfragment Messages_conversation on Conversation {\n  id\n  internalID\n  from {\n    name\n    email\n    id\n  }\n  to {\n    name\n    id\n  }\n  initialMessage\n  lastMessageID\n  orderConnection(first: 10, participantType: BUYER) {\n    edges {\n      node {\n        __typename\n        orderHistory {\n          ...OrderUpdate_event\n          __typename\n          ... on CommerceOrderStateChangedEvent {\n            createdAt\n            state\n            stateReason\n          }\n          ... on CommerceOfferSubmittedEvent {\n            createdAt\n          }\n        }\n        id\n      }\n    }\n  }\n  messagesConnection(first: 10, sort: DESC) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n    edges {\n      cursor\n      node {\n        __typename\n        id\n        internalID\n        isFromUser\n        isFirstMessage\n        body\n        createdAt\n        attachments {\n          id\n          internalID\n          contentType\n          downloadURL\n          fileName\n          ...ImagePreview_attachment\n          ...PDFPreview_attachment\n          ...FileDownload_attachment\n        }\n        ...Message_message\n      }\n    }\n  }\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        href\n        ...ArtworkPreview_artwork\n      }\n      ... on Show {\n        href\n        ...ShowPreview_show\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment OrderUpdate_event on CommerceOrderEventUnion {\n  __isCommerceOrderEventUnion: __typename\n  __typename\n  ... on CommerceOrderStateChangedEvent {\n    createdAt\n    stateReason\n    state\n  }\n  ... on CommerceOfferSubmittedEvent {\n    createdAt\n    offer {\n      amount\n      fromParticipant\n      definesTotal\n      offerAmountChanged\n      respondsTo {\n        fromParticipant\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PDFPreview_attachment on Attachment {\n  fileName\n  ...AttachmentPreview_attachment\n}\n\nfragment ShowPreview_show on Show {\n  slug\n  internalID\n  name\n  coverImage {\n    url\n    aspectRatio\n  }\n  fair {\n    name\n    id\n  }\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n    ... on ExternalPartner {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "64e0e5fa20a72cb800d56c9645fd6790";

export default node;
