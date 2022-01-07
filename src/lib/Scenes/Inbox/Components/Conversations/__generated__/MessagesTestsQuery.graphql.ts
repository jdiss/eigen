/**
 * @generated SignedSource<<9ed47888799583722cce22ecae11153d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MessagesTestsQuery$variables = {
  conversationID: string;
};
export type MessagesTestsQueryVariables = MessagesTestsQuery$variables;
export type MessagesTestsQuery$data = {
  readonly me: {
    readonly conversation: {
      readonly " $fragmentSpreads": FragmentRefs<"Messages_conversation">;
    } | null;
  } | null;
};
export type MessagesTestsQueryResponse = MessagesTestsQuery$data;
export type MessagesTestsQuery = {
  variables: MessagesTestsQueryVariables;
  response: MessagesTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conversationID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "conversationID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  (v2/*: any*/)
],
v7 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fromParticipant",
  "storageKey": null
},
v11 = [
  (v7/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "DESC"
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v14 = [
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
v15 = [
  (v2/*: any*/)
],
v16 = {
  "kind": "InlineFragment",
  "selections": (v15/*: any*/),
  "type": "Node",
  "abstractKey": "__isNode"
},
v17 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v18 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v19 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v21 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Float"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v23 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v24 = {
  "enumValues": [
    "BUYER",
    "SELLER"
  ],
  "nullable": true,
  "plural": false,
  "type": "CommerceOrderParticipantEnum"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MessagesTestsQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Messages_conversation"
              }
            ],
            "storageKey": null
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
    "name": "MessagesTestsQuery",
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
            "args": (v1/*: any*/),
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationInitiator",
                "kind": "LinkedField",
                "name": "from",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v2/*: any*/)
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
                "selections": (v6/*: any*/),
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
                  (v7/*: any*/),
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
                          (v8/*: any*/),
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
                              (v8/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v9/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "stateReason",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "state",
                                    "storageKey": null
                                  }
                                ],
                                "type": "CommerceOrderStateChangedEvent",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v9/*: any*/),
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
                                      (v10/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "definesTotal",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "offerAmountChanged",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommerceOffer",
                                        "kind": "LinkedField",
                                        "name": "respondsTo",
                                        "plural": false,
                                        "selections": [
                                          (v10/*: any*/),
                                          (v2/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
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
                          (v2/*: any*/)
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
                "args": (v11/*: any*/),
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
                          (v8/*: any*/),
                          (v2/*: any*/),
                          (v3/*: any*/),
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
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Attachment",
                            "kind": "LinkedField",
                            "name": "attachments",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
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
                              (v4/*: any*/),
                              (v5/*: any*/)
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
                "args": (v11/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "Messages_messagesConnection",
                "kind": "LinkedHandle",
                "name": "messagesConnection"
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
                      (v8/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v3/*: any*/),
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
                            "selections": (v14/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "type": "Artwork",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": (v14/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Fair",
                            "kind": "LinkedField",
                            "name": "fair",
                            "plural": false,
                            "selections": (v6/*: any*/),
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
                              (v8/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v4/*: any*/)
                                ],
                                "type": "Partner",
                                "abstractKey": null
                              },
                              (v16/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": (v15/*: any*/),
                                "type": "ExternalPartner",
                                "abstractKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "Show",
                        "abstractKey": null
                      },
                      (v16/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1e43b53d4068779d9f5c15d690cc8baa",
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
        "me.conversation.from": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationInitiator"
        },
        "me.conversation.from.email": (v17/*: any*/),
        "me.conversation.from.id": (v18/*: any*/),
        "me.conversation.from.name": (v17/*: any*/),
        "me.conversation.id": (v18/*: any*/),
        "me.conversation.initialMessage": (v17/*: any*/),
        "me.conversation.internalID": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        },
        "me.conversation.items": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationItem"
        },
        "me.conversation.items.item": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ConversationItemType"
        },
        "me.conversation.items.item.__isNode": (v17/*: any*/),
        "me.conversation.items.item.__typename": (v17/*: any*/),
        "me.conversation.items.item.artistNames": (v19/*: any*/),
        "me.conversation.items.item.coverImage": (v20/*: any*/),
        "me.conversation.items.item.coverImage.aspectRatio": (v21/*: any*/),
        "me.conversation.items.item.coverImage.url": (v19/*: any*/),
        "me.conversation.items.item.date": (v19/*: any*/),
        "me.conversation.items.item.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "me.conversation.items.item.fair.id": (v18/*: any*/),
        "me.conversation.items.item.fair.name": (v19/*: any*/),
        "me.conversation.items.item.href": (v19/*: any*/),
        "me.conversation.items.item.id": (v18/*: any*/),
        "me.conversation.items.item.image": (v20/*: any*/),
        "me.conversation.items.item.image.aspectRatio": (v21/*: any*/),
        "me.conversation.items.item.image.url": (v19/*: any*/),
        "me.conversation.items.item.internalID": (v18/*: any*/),
        "me.conversation.items.item.name": (v19/*: any*/),
        "me.conversation.items.item.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "me.conversation.items.item.partner.__isNode": (v17/*: any*/),
        "me.conversation.items.item.partner.__typename": (v17/*: any*/),
        "me.conversation.items.item.partner.id": (v18/*: any*/),
        "me.conversation.items.item.partner.name": (v19/*: any*/),
        "me.conversation.items.item.slug": (v18/*: any*/),
        "me.conversation.items.item.title": (v19/*: any*/),
        "me.conversation.lastMessageID": (v19/*: any*/),
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
        "me.conversation.messagesConnection.edges.cursor": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Message"
        },
        "me.conversation.messagesConnection.edges.node.__typename": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Attachment"
        },
        "me.conversation.messagesConnection.edges.node.attachments.contentType": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.downloadURL": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.fileName": (v17/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.id": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.attachments.internalID": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.body": (v19/*: any*/),
        "me.conversation.messagesConnection.edges.node.createdAt": (v19/*: any*/),
        "me.conversation.messagesConnection.edges.node.from": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageInitiator"
        },
        "me.conversation.messagesConnection.edges.node.from.email": (v19/*: any*/),
        "me.conversation.messagesConnection.edges.node.from.name": (v19/*: any*/),
        "me.conversation.messagesConnection.edges.node.id": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.internalID": (v18/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFirstMessage": (v22/*: any*/),
        "me.conversation.messagesConnection.edges.node.isFromUser": (v22/*: any*/),
        "me.conversation.messagesConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.conversation.messagesConnection.pageInfo.endCursor": (v19/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasNextPage": (v23/*: any*/),
        "me.conversation.messagesConnection.pageInfo.hasPreviousPage": (v23/*: any*/),
        "me.conversation.messagesConnection.pageInfo.startCursor": (v19/*: any*/),
        "me.conversation.orderConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrderConnectionWithTotalCount"
        },
        "me.conversation.orderConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "CommerceOrderEdge"
        },
        "me.conversation.orderConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOrder"
        },
        "me.conversation.orderConnection.edges.node.__typename": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.id": (v18/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "CommerceOrderEventUnion"
        },
        "me.conversation.orderConnection.edges.node.orderHistory.__isCommerceOrderEventUnion": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.__typename": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.createdAt": (v17/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "CommerceOffer"
        },
        "me.conversation.orderConnection.edges.node.orderHistory.offer.amount": (v19/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.definesTotal": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.fromParticipant": (v24/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.id": (v18/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.offerAmountChanged": (v23/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CommerceOffer"
        },
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo.fromParticipant": (v24/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.offer.respondsTo.id": (v18/*: any*/),
        "me.conversation.orderConnection.edges.node.orderHistory.state": {
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
        "me.conversation.orderConnection.edges.node.orderHistory.stateReason": (v19/*: any*/),
        "me.conversation.to": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationResponder"
        },
        "me.conversation.to.id": (v18/*: any*/),
        "me.conversation.to.name": (v17/*: any*/),
        "me.id": (v18/*: any*/)
      }
    },
    "name": "MessagesTestsQuery",
    "operationKind": "query",
    "text": "query MessagesTestsQuery(\n  $conversationID: String!\n) {\n  me {\n    conversation(id: $conversationID) {\n      ...Messages_conversation\n      id\n    }\n    id\n  }\n}\n\nfragment ArtworkPreview_artwork on Artwork {\n  slug\n  internalID\n  title\n  artistNames\n  date\n  image {\n    url\n    aspectRatio\n  }\n}\n\nfragment AttachmentPreview_attachment on Attachment {\n  internalID\n}\n\nfragment FileDownload_attachment on Attachment {\n  fileName\n  downloadURL\n  ...AttachmentPreview_attachment\n}\n\nfragment ImagePreview_attachment on Attachment {\n  downloadURL\n  ...AttachmentPreview_attachment\n}\n\nfragment Message_message on Message {\n  __typename\n  body\n  createdAt\n  internalID\n  isFromUser\n  isFirstMessage\n  from {\n    name\n    email\n  }\n  attachments {\n    id\n    internalID\n    contentType\n    downloadURL\n    fileName\n    ...PDFPreview_attachment\n    ...ImagePreview_attachment\n    ...FileDownload_attachment\n  }\n}\n\nfragment Messages_conversation on Conversation {\n  id\n  internalID\n  from {\n    name\n    email\n    id\n  }\n  to {\n    name\n    id\n  }\n  initialMessage\n  lastMessageID\n  orderConnection(first: 10, participantType: BUYER) {\n    edges {\n      node {\n        __typename\n        orderHistory {\n          ...OrderUpdate_event\n          __typename\n          ... on CommerceOrderStateChangedEvent {\n            createdAt\n            state\n            stateReason\n          }\n          ... on CommerceOfferSubmittedEvent {\n            createdAt\n          }\n        }\n        id\n      }\n    }\n  }\n  messagesConnection(first: 10, sort: DESC) {\n    pageInfo {\n      startCursor\n      endCursor\n      hasPreviousPage\n      hasNextPage\n    }\n    edges {\n      cursor\n      node {\n        __typename\n        id\n        internalID\n        isFromUser\n        isFirstMessage\n        body\n        createdAt\n        attachments {\n          id\n          internalID\n          contentType\n          downloadURL\n          fileName\n          ...ImagePreview_attachment\n          ...PDFPreview_attachment\n          ...FileDownload_attachment\n        }\n        ...Message_message\n      }\n    }\n  }\n  items {\n    item {\n      __typename\n      ... on Artwork {\n        href\n        ...ArtworkPreview_artwork\n      }\n      ... on Show {\n        href\n        ...ShowPreview_show\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment OrderUpdate_event on CommerceOrderEventUnion {\n  __isCommerceOrderEventUnion: __typename\n  __typename\n  ... on CommerceOrderStateChangedEvent {\n    createdAt\n    stateReason\n    state\n  }\n  ... on CommerceOfferSubmittedEvent {\n    createdAt\n    offer {\n      amount\n      fromParticipant\n      definesTotal\n      offerAmountChanged\n      respondsTo {\n        fromParticipant\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PDFPreview_attachment on Attachment {\n  fileName\n  ...AttachmentPreview_attachment\n}\n\nfragment ShowPreview_show on Show {\n  slug\n  internalID\n  name\n  coverImage {\n    url\n    aspectRatio\n  }\n  fair {\n    name\n    id\n  }\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n    ... on ExternalPartner {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "38039b9d5008865ff651a2149b9218e6";

export default node;
