/**
 * @generated SignedSource<<ec2c6eb4d1b3540af928f4d58770507b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfileEditFormModal_me$data = {
  readonly name: string | null;
  readonly bio: string | null;
  readonly icon: {
    readonly url: string | null;
  } | null;
  readonly " $fragmentType": "MyProfileEditFormModal_me";
};
export type MyProfileEditFormModal_me = MyProfileEditFormModal_me$data;
export type MyProfileEditFormModal_me$key = {
  readonly " $data"?: MyProfileEditFormModal_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyProfileEditFormModal_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyProfileEditFormModal_me",
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
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "2a2999c02d81e82b1ab351a36d90b806";

export default node;
