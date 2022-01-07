/**
 * @generated SignedSource<<60f6b1db8e39e1e9b773e1ce447a15f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConversationDetails_me$data = {
  readonly conversation: {
    readonly to: {
      readonly name: string;
    };
    readonly items: ReadonlyArray<{
      readonly item: {
        readonly " $fragmentSpreads": FragmentRefs<"ItemInfo_item" | "OrderInformation_artwork">;
      } | null;
    } | null> | null;
    readonly orderConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"SellerReplyEstimate_order" | "OrderInformation_order" | "Shipping_order" | "PaymentMethod_order">;
        } | null;
      } | null> | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"AttachmentList_conversation">;
  } | null;
  readonly " $fragmentType": "ConversationDetails_me";
};
export type ConversationDetails_me = ConversationDetails_me$data;
export type ConversationDetails_me$key = {
  readonly " $data"?: ConversationDetails_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConversationDetails_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "conversationID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConversationDetails_me",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "AttachmentList_conversation"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ConversationResponder",
          "kind": "LinkedField",
          "name": "to",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
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
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ItemInfo_item"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "OrderInformation_artwork"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 30
            },
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
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "SellerReplyEstimate_order"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "OrderInformation_order"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "Shipping_order"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "PaymentMethod_order"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "orderConnection(first:30,states:[\"APPROVED\",\"PENDING\",\"SUBMITTED\",\"FULFILLED\"])"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "26ff8c3c08110848e3e4be3822711bb6";

export default node;
