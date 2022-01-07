/**
 * @generated SignedSource<<ffca23b87ca80656566d072e0c560d00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionAndSavedWorksTestsQuery$variables = {};
export type MyCollectionAndSavedWorksTestsQueryVariables = MyCollectionAndSavedWorksTestsQuery$variables;
export type MyCollectionAndSavedWorksTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionAndSavedWorks_me">;
  } | null;
};
export type MyCollectionAndSavedWorksTestsQueryResponse = MyCollectionAndSavedWorksTestsQuery$data;
export type MyCollectionAndSavedWorksTestsQuery = {
  variables: MyCollectionAndSavedWorksTestsQueryVariables;
  response: MyCollectionAndSavedWorksTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionAndSavedWorksTestsQuery",
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
            "name": "MyCollectionAndSavedWorks_me"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyCollectionAndSavedWorksTestsQuery",
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
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bio",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "icon",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "thumbnail"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"thumbnail\")"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3fbdf4898d34f038e5b8c560728a5443",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.bio": (v0/*: any*/),
        "me.createdAt": (v0/*: any*/),
        "me.icon": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "me.icon.url": (v0/*: any*/),
        "me.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "me.name": (v0/*: any*/)
      }
    },
    "name": "MyCollectionAndSavedWorksTestsQuery",
    "operationKind": "query",
    "text": "query MyCollectionAndSavedWorksTestsQuery {\n  me @optionalField {\n    ...MyCollectionAndSavedWorks_me\n    id\n  }\n}\n\nfragment MyCollectionAndSavedWorks_me on Me {\n  name\n  bio\n  icon {\n    url(version: \"thumbnail\")\n  }\n  createdAt\n  ...MyProfileEditFormModal_me\n}\n\nfragment MyProfileEditFormModal_me on Me {\n  name\n  bio\n  icon {\n    url(version: \"thumbnail\")\n  }\n}\n"
  }
};
})();

(node as any).hash = "6510b5ab5aadfb3040f84106f4be7a50";

export default node;
