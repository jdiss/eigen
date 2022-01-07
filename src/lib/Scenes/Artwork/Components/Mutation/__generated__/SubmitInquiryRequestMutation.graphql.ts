/**
 * @generated SignedSource<<22f88fbfb6988107444c7ebb3e83a74a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SubmitInquiryRequestMutationInput = {
  clientMutationId?: string | null;
  contactGallery?: boolean | null;
  inquireableID: string;
  inquireableType: string;
  message?: string | null;
  questions?: ReadonlyArray<InquiryQuestionInput | null> | null;
};
export type InquiryQuestionInput = {
  details?: string | null;
  questionID: string;
};
export type SubmitInquiryRequestMutation$variables = {
  input: SubmitInquiryRequestMutationInput;
};
export type SubmitInquiryRequestMutationVariables = SubmitInquiryRequestMutation$variables;
export type SubmitInquiryRequestMutation$data = {
  readonly submitInquiryRequestMutation: {
    readonly inquiryRequest: {
      readonly inquireable: {
        readonly __typename: "Artwork";
        readonly title: string | null;
        readonly artists: ReadonlyArray<{
          readonly name: string | null;
          readonly birthday: string | null;
        } | null> | null;
      } | {
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        readonly __typename: "%other";
      } | null;
    } | null;
  } | null;
};
export type SubmitInquiryRequestMutationResponse = SubmitInquiryRequestMutation$data;
export type SubmitInquiryRequestMutation = {
  variables: SubmitInquiryRequestMutationVariables;
  response: SubmitInquiryRequestMutation$data;
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
  "name": "title",
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
  "name": "birthday",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SubmitInquiryRequestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SubmitInquiryRequestMutationPayload",
        "kind": "LinkedField",
        "name": "submitInquiryRequestMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "InquiryRequest",
            "kind": "LinkedField",
            "name": "inquiryRequest",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "inquireable",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artists",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/)
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
    "name": "SubmitInquiryRequestMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SubmitInquiryRequestMutationPayload",
        "kind": "LinkedField",
        "name": "submitInquiryRequestMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "InquiryRequest",
            "kind": "LinkedField",
            "name": "inquiryRequest",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "inquireable",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artists",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/)
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
                      (v6/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
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
    ]
  },
  "params": {
    "cacheID": "e1a8058daf49935f0c3659d86230efde",
    "id": null,
    "metadata": {},
    "name": "SubmitInquiryRequestMutation",
    "operationKind": "mutation",
    "text": "mutation SubmitInquiryRequestMutation(\n  $input: SubmitInquiryRequestMutationInput!\n) {\n  submitInquiryRequestMutation(input: $input) {\n    inquiryRequest {\n      inquireable {\n        __typename\n        ... on Artwork {\n          title\n          artists {\n            name\n            birthday\n            id\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eaf73a3a8eeaa9811ff235217157b4b2";

export default node;
