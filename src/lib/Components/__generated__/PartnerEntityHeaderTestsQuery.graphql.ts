/**
 * @generated SignedSource<<03729e3c19c266cbf15b0eafafd763cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerEntityHeaderTestsQuery$variables = {
  id: string;
};
export type PartnerEntityHeaderTestsQueryVariables = PartnerEntityHeaderTestsQuery$variables;
export type PartnerEntityHeaderTestsQuery$data = {
  readonly partner: {
    readonly " $fragmentSpreads": FragmentRefs<"PartnerEntityHeader_partner">;
  } | null;
};
export type PartnerEntityHeaderTestsQueryResponse = PartnerEntityHeaderTestsQuery$data;
export type PartnerEntityHeaderTestsQuery = {
  variables: PartnerEntityHeaderTestsQueryVariables;
  response: PartnerEntityHeaderTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerEntityHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PartnerEntityHeader_partner"
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
    "name": "PartnerEntityHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
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
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
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
          },
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cities",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isDefaultProfilePublic",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "initials",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "531d9ff8106aac34c324a9c43e9a70a0",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "partner.cities": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "String"
        },
        "partner.href": (v4/*: any*/),
        "partner.id": (v5/*: any*/),
        "partner.initials": (v4/*: any*/),
        "partner.internalID": (v5/*: any*/),
        "partner.isDefaultProfilePublic": (v6/*: any*/),
        "partner.name": (v4/*: any*/),
        "partner.profile": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Profile"
        },
        "partner.profile.icon": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "partner.profile.icon.url": (v4/*: any*/),
        "partner.profile.id": (v5/*: any*/),
        "partner.profile.internalID": (v5/*: any*/),
        "partner.profile.isFollowed": (v6/*: any*/),
        "partner.slug": (v5/*: any*/)
      }
    },
    "name": "PartnerEntityHeaderTestsQuery",
    "operationKind": "query",
    "text": "query PartnerEntityHeaderTestsQuery(\n  $id: String!\n) {\n  partner(id: $id) {\n    ...PartnerEntityHeader_partner\n    id\n  }\n}\n\nfragment PartnerEntityHeader_partner on Partner {\n  ...PartnerFollowButton_partner\n  href\n  name\n  cities\n  isDefaultProfilePublic\n  initials\n  profile {\n    icon {\n      url(version: \"square140\")\n    }\n    id\n  }\n}\n\nfragment PartnerFollowButton_partner on Partner {\n  internalID\n  slug\n  profile {\n    id\n    internalID\n    isFollowed\n  }\n}\n"
  }
};
})();

(node as any).hash = "d59dc80afe10ee7945beab11d0d2e45d";

export default node;
