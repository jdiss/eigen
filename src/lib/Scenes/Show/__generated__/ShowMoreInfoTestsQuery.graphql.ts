/**
 * @generated SignedSource<<eabf526e8e519ab18c66f28b8c14604c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowMoreInfoTestsQuery$variables = {
  showID: string;
};
export type ShowMoreInfoTestsQueryVariables = ShowMoreInfoTestsQuery$variables;
export type ShowMoreInfoTestsQuery$data = {
  readonly show: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowMoreInfo_show">;
  } | null;
};
export type ShowMoreInfoTestsQueryResponse = ShowMoreInfoTestsQuery$data;
export type ShowMoreInfoTestsQuery = {
  variables: ShowMoreInfoTestsQueryVariables;
  response: ShowMoreInfoTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "showID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "showID"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Location",
  "kind": "LinkedField",
  "name": "location",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "city",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address2",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postalCode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "LatLng",
      "kind": "LinkedField",
      "name": "coordinates",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lat",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lng",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "openingHours",
      "plural": false,
      "selections": [
        (v2/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FormattedDaySchedules",
              "kind": "LinkedField",
              "name": "schedules",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "days",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hours",
                  "storageKey": null
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "type": "OpeningHoursArray",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            }
          ],
          "type": "OpeningHoursText",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    (v2/*: any*/)
  ],
  "storageKey": null
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v10 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Location"
},
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "LatLng"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
},
v15 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "OpeningHoursUnion"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "FormattedDaySchedules"
},
v17 = {
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
    "name": "ShowMoreInfoTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowMoreInfo_show"
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
    "name": "ShowMoreInfoTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v4/*: any*/),
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
                  (v7/*: any*/),
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  }
                ],
                "type": "Partner",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v6/*: any*/)
                ],
                "type": "ExternalPartner",
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
          {
            "alias": null,
            "args": null,
            "concreteType": "Fair",
            "kind": "LinkedField",
            "name": "fair",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v8/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          (v6/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v7/*: any*/),
          {
            "alias": "about",
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "MARKDOWN"
              }
            ],
            "kind": "ScalarField",
            "name": "pressRelease",
            "storageKey": "pressRelease(format:\"MARKDOWN\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "51ed4fc2ad0db12641b64dc1ab85bc30",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "show": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "show.about": (v9/*: any*/),
        "show.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "show.fair.id": (v10/*: any*/),
        "show.fair.location": (v11/*: any*/),
        "show.fair.location.__typename": (v12/*: any*/),
        "show.fair.location.address": (v9/*: any*/),
        "show.fair.location.address2": (v9/*: any*/),
        "show.fair.location.city": (v9/*: any*/),
        "show.fair.location.coordinates": (v13/*: any*/),
        "show.fair.location.coordinates.lat": (v14/*: any*/),
        "show.fair.location.coordinates.lng": (v14/*: any*/),
        "show.fair.location.id": (v10/*: any*/),
        "show.fair.location.internalID": (v10/*: any*/),
        "show.fair.location.openingHours": (v15/*: any*/),
        "show.fair.location.openingHours.__typename": (v12/*: any*/),
        "show.fair.location.openingHours.schedules": (v16/*: any*/),
        "show.fair.location.openingHours.schedules.__typename": (v12/*: any*/),
        "show.fair.location.openingHours.schedules.days": (v9/*: any*/),
        "show.fair.location.openingHours.schedules.hours": (v9/*: any*/),
        "show.fair.location.openingHours.text": (v9/*: any*/),
        "show.fair.location.postalCode": (v9/*: any*/),
        "show.fair.location.summary": (v9/*: any*/),
        "show.fair.name": (v9/*: any*/),
        "show.href": (v9/*: any*/),
        "show.id": (v10/*: any*/),
        "show.internalID": (v10/*: any*/),
        "show.location": (v11/*: any*/),
        "show.location.__typename": (v12/*: any*/),
        "show.location.address": (v9/*: any*/),
        "show.location.address2": (v9/*: any*/),
        "show.location.city": (v9/*: any*/),
        "show.location.coordinates": (v13/*: any*/),
        "show.location.coordinates.lat": (v14/*: any*/),
        "show.location.coordinates.lng": (v14/*: any*/),
        "show.location.id": (v10/*: any*/),
        "show.location.internalID": (v10/*: any*/),
        "show.location.openingHours": (v15/*: any*/),
        "show.location.openingHours.__typename": (v12/*: any*/),
        "show.location.openingHours.schedules": (v16/*: any*/),
        "show.location.openingHours.schedules.__typename": (v12/*: any*/),
        "show.location.openingHours.schedules.days": (v9/*: any*/),
        "show.location.openingHours.schedules.hours": (v9/*: any*/),
        "show.location.openingHours.text": (v9/*: any*/),
        "show.location.postalCode": (v9/*: any*/),
        "show.location.summary": (v9/*: any*/),
        "show.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "show.partner.__isNode": (v12/*: any*/),
        "show.partner.__typename": (v12/*: any*/),
        "show.partner.cities": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "String"
        },
        "show.partner.href": (v9/*: any*/),
        "show.partner.id": (v10/*: any*/),
        "show.partner.initials": (v9/*: any*/),
        "show.partner.internalID": (v10/*: any*/),
        "show.partner.isDefaultProfilePublic": (v17/*: any*/),
        "show.partner.name": (v9/*: any*/),
        "show.partner.profile": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Profile"
        },
        "show.partner.profile.icon": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "show.partner.profile.icon.url": (v9/*: any*/),
        "show.partner.profile.id": (v10/*: any*/),
        "show.partner.profile.internalID": (v10/*: any*/),
        "show.partner.profile.isFollowed": (v17/*: any*/),
        "show.partner.slug": (v10/*: any*/),
        "show.partner.type": (v9/*: any*/),
        "show.pressRelease": (v9/*: any*/),
        "show.slug": (v10/*: any*/)
      }
    },
    "name": "ShowMoreInfoTestsQuery",
    "operationKind": "query",
    "text": "query ShowMoreInfoTestsQuery(\n  $showID: String!\n) {\n  show(id: $showID) {\n    ...ShowMoreInfo_show\n    id\n  }\n}\n\nfragment LocationMap_location on Location {\n  id\n  internalID\n  city\n  address\n  address2\n  postalCode\n  summary\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment PartnerEntityHeader_partner on Partner {\n  ...PartnerFollowButton_partner\n  href\n  name\n  cities\n  isDefaultProfilePublic\n  initials\n  profile {\n    icon {\n      url(version: \"square140\")\n    }\n    id\n  }\n}\n\nfragment PartnerFollowButton_partner on Partner {\n  internalID\n  slug\n  profile {\n    id\n    internalID\n    isFollowed\n  }\n}\n\nfragment ShowHours_show on Show {\n  id\n  location {\n    ...ShowLocationHours_location\n    id\n  }\n  fair {\n    location {\n      ...ShowLocationHours_location\n      id\n    }\n    id\n  }\n}\n\nfragment ShowLocationHours_location on Location {\n  openingHours {\n    __typename\n    ... on OpeningHoursArray {\n      schedules {\n        days\n        hours\n      }\n    }\n    ... on OpeningHoursText {\n      text\n    }\n  }\n}\n\nfragment ShowLocation_show on Show {\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  fair {\n    name\n    location {\n      ...LocationMap_location\n      id\n    }\n    id\n  }\n  location {\n    ...LocationMap_location\n    id\n  }\n}\n\nfragment ShowMoreInfo_show on Show {\n  ...ShowLocation_show\n  ...ShowHours_show\n  internalID\n  slug\n  href\n  about: description\n  pressRelease(format: MARKDOWN)\n  partner {\n    ...PartnerEntityHeader_partner\n    __typename\n    ... on Partner {\n      type\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n    ... on ExternalPartner {\n      id\n    }\n  }\n  fair {\n    location {\n      __typename\n      openingHours {\n        __typename\n        ... on OpeningHoursArray {\n          schedules {\n            __typename\n          }\n        }\n        ... on OpeningHoursText {\n          text\n        }\n      }\n      coordinates {\n        lat\n        lng\n      }\n      id\n    }\n    id\n  }\n  location {\n    __typename\n    openingHours {\n      __typename\n      ... on OpeningHoursArray {\n        schedules {\n          __typename\n        }\n      }\n      ... on OpeningHoursText {\n        text\n      }\n    }\n    coordinates {\n      lat\n      lng\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a3892da3b0e64394890f8be5b8847af";

export default node;
