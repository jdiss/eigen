/**
 * @generated SignedSource<<aa71629d7ac82ccadcf30edb6f898e90>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AttachmentList_conversation$data = {
  readonly messagesConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: string;
        readonly attachments: ReadonlyArray<{
          readonly id: string;
          readonly contentType: string;
          readonly " $fragmentSpreads": FragmentRefs<"FileDownload_attachment">;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "AttachmentList_conversation";
};
export type AttachmentList_conversation = AttachmentList_conversation$data;
export type AttachmentList_conversation$key = {
  readonly " $data"?: AttachmentList_conversation$data;
  readonly " $fragmentSpreads": FragmentRefs<"AttachmentList_conversation">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "messagesConnection"
        ]
      }
    ]
  },
  "name": "AttachmentList_conversation",
  "selections": [
    {
      "alias": "messagesConnection",
      "args": null,
      "concreteType": "MessageConnection",
      "kind": "LinkedField",
      "name": "__Details_messagesConnection_connection",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Attachment",
                  "kind": "LinkedField",
                  "name": "attachments",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "contentType",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "FileDownload_attachment"
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
      "storageKey": null
    }
  ],
  "type": "Conversation",
  "abstractKey": null
};

(node as any).hash = "11cd7e772fe480421c617dac5c19e8ab";

export default node;
