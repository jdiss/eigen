/**
 * @generated SignedSource<<6aaf3b90eb98f266a59f9a57569ca54e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Conversations_me$data = {
  readonly conversations: {
    readonly pageInfo: {
      readonly endCursor: string | null;
      readonly hasNextPage: boolean;
    };
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string | null;
        readonly last_message: string | null;
        readonly items: ReadonlyArray<{
          readonly item: {
            readonly __typename: "Artwork";
            readonly internalID: string;
            readonly partner: {
              readonly internalID: string;
            } | null;
          } | {
            // This will never be '%other', but we need some
            // value in case none of the concrete values match.
            readonly __typename: "%other";
          } | null;
        } | null> | null;
        readonly " $fragmentSpreads": FragmentRefs<"ConversationSnippet_conversation">;
      } | null;
    } | null> | null;
    readonly totalUnreadCount: number | null;
  } | null;
  readonly " $fragmentType": "Conversations_me";
};
export type Conversations_me = Conversations_me$data;
export type Conversations_me$key = {
  readonly " $data"?: Conversations_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Conversations_me">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "conversations"
        ]
      }
    ]
  },
  "name": "Conversations_me",
  "selections": [
    {
      "alias": "conversations",
      "args": null,
      "concreteType": "ConversationConnection",
      "kind": "LinkedField",
      "name": "__Conversations_conversations_connection",
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
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ConversationEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Conversation",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": "last_message",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "lastMessage",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ConversationSnippet_conversation"
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
                            (v0/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "Partner",
                              "kind": "LinkedField",
                              "name": "partner",
                              "plural": false,
                              "selections": [
                                (v0/*: any*/)
                              ],
                              "storageKey": null
                            }
                          ],
                          "type": "Artwork",
                          "abstractKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                (v1/*: any*/)
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
          "kind": "ScalarField",
          "name": "totalUnreadCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "f47deadb2cba4b412e6fb91376890bd5";

export default node;
