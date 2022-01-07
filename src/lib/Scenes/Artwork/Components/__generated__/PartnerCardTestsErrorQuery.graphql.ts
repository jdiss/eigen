/**
 * @generated SignedSource<<bd232abe1078fa47fd2ddb621415f7ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerCardTestsErrorQuery$variables = {};
export type PartnerCardTestsErrorQueryVariables = PartnerCardTestsErrorQuery$variables;
export type PartnerCardTestsErrorQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerCard_artwork">;
  } | null;
};
export type PartnerCardTestsErrorQueryResponse = PartnerCardTestsErrorQuery$data;
export type PartnerCardTestsErrorQuery$rawResponse = {
  readonly artwork: {
    readonly sale: {
      readonly isBenefit: boolean | null;
      readonly isGalleryAuction: boolean | null;
      readonly id: string;
    } | null;
    readonly partner: {
      readonly cities: ReadonlyArray<string | null> | null;
      readonly is_default_profile_public: boolean | null;
      readonly type: string | null;
      readonly name: string | null;
      readonly slug: string;
      readonly id: string;
      readonly href: string | null;
      readonly initials: string | null;
      readonly profile: {
        readonly id: string;
        readonly internalID: string;
        readonly is_followed: boolean | null;
        readonly icon: {
          readonly url: string | null;
        } | null;
      } | null;
    } | null;
    readonly id: string;
  } | null;
};
export type PartnerCardTestsErrorQueryRawResponse = PartnerCardTestsErrorQuery$rawResponse;
export type PartnerCardTestsErrorQuery = {
  variables: PartnerCardTestsErrorQueryVariables;
  response: PartnerCardTestsErrorQuery$data;
  rawResponse: PartnerCardTestsErrorQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artworkID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerCardTestsErrorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PartnerCard_artwork"
          }
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PartnerCardTestsErrorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isBenefit",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isGalleryAuction",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Partner",
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cities",
                "storageKey": null
              },
              {
                "alias": "is_default_profile_public",
                "args": null,
                "kind": "ScalarField",
                "name": "isDefaultProfilePublic",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
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
                "name": "slug",
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "href",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "initials",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "profile",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "internalID",
                    "storageKey": null
                  },
                  {
                    "alias": "is_followed",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isFollowed",
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
                            "value": "square140"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": "url(version:\"square140\")"
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
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ]
  },
  "params": {
    "cacheID": "8207876052c2dd48e797c2c005ea9c8a",
    "id": null,
    "metadata": {},
    "name": "PartnerCardTestsErrorQuery",
    "operationKind": "query",
    "text": "query PartnerCardTestsErrorQuery {\n  artwork(id: \"artworkID\") {\n    ...PartnerCard_artwork\n    id\n  }\n}\n\nfragment PartnerCard_artwork on Artwork {\n  sale {\n    isBenefit\n    isGalleryAuction\n    id\n  }\n  partner {\n    cities\n    is_default_profile_public: isDefaultProfilePublic\n    type\n    name\n    slug\n    id\n    href\n    initials\n    profile {\n      id\n      internalID\n      is_followed: isFollowed\n      icon {\n        url(version: \"square140\")\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "701097de9d85e4eafaa181ff75e565d5";

export default node;
