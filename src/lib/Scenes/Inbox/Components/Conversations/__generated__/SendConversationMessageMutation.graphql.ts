/**
 * @generated SignedSource<<950b084e6feb35f4044ebad87bf7bfd0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SendConversationMessageMutationInput = {
  bodyText: string;
  clientMutationId?: string | null;
  from: string;
  id: string;
  replyToMessageID: string;
};
export type SendConversationMessageMutation$variables = {
  input: SendConversationMessageMutationInput;
};
export type SendConversationMessageMutationVariables = SendConversationMessageMutation$variables;
export type SendConversationMessageMutation$data = {
  readonly sendConversationMessage: {
    readonly messageEdge: {
      readonly node: {
        readonly impulse_id: string;
        readonly is_from_user: boolean | null;
        readonly body: string | null;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"Message_message">;
      } | null;
    } | null;
  } | null;
};
export type SendConversationMessageMutationResponse = SendConversationMessageMutation$data;
export type SendConversationMessageMutation = {
  variables: SendConversationMessageMutationVariables;
  response: SendConversationMessageMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": "impulse_id",
  "args": null,
  "kind": "ScalarField",
  "name": "impulseID",
  "storageKey": null
},
v3 = {
  "alias": "is_from_user",
  "args": null,
  "kind": "ScalarField",
  "name": "isFromUser",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SendConversationMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendConversationMessageMutationPayload",
        "kind": "LinkedField",
        "name": "sendConversationMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageEdge",
            "kind": "LinkedField",
            "name": "messageEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Message",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Message_message"
                  }
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SendConversationMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendConversationMessageMutationPayload",
        "kind": "LinkedField",
        "name": "sendConversationMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageEdge",
            "kind": "LinkedField",
            "name": "messageEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Message",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  (v6/*: any*/),
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
                    "concreteType": "MessageInitiator",
                    "kind": "LinkedField",
                    "name": "from",
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
                        "name": "email",
                        "storageKey": null
                      }
                    ],
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
                      (v5/*: any*/),
                      (v6/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9a601b58cfe8124ff0085df2cd44a3d8",
    "id": null,
    "metadata": {},
    "name": "SendConversationMessageMutation",
    "operationKind": "mutation",
    "text": "mutation SendConversationMessageMutation(\n  $input: SendConversationMessageMutationInput!\n) {\n  sendConversationMessage(input: $input) {\n    messageEdge {\n      node {\n        impulse_id: impulseID\n        is_from_user: isFromUser\n        body\n        id\n        ...Message_message\n      }\n    }\n  }\n}\n\nfragment AttachmentPreview_attachment on Attachment {\n  internalID\n}\n\nfragment FileDownload_attachment on Attachment {\n  fileName\n  downloadURL\n  ...AttachmentPreview_attachment\n}\n\nfragment ImagePreview_attachment on Attachment {\n  downloadURL\n  ...AttachmentPreview_attachment\n}\n\nfragment Message_message on Message {\n  __typename\n  body\n  createdAt\n  internalID\n  isFromUser\n  isFirstMessage\n  from {\n    name\n    email\n  }\n  attachments {\n    id\n    internalID\n    contentType\n    downloadURL\n    fileName\n    ...PDFPreview_attachment\n    ...ImagePreview_attachment\n    ...FileDownload_attachment\n  }\n}\n\nfragment PDFPreview_attachment on Attachment {\n  fileName\n  ...AttachmentPreview_attachment\n}\n"
  }
};
})();

(node as any).hash = "de9c31165ba6aff10f299db16ec743b0";

export default node;
