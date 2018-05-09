import { storiesOf } from "@storybook/react-native"
import React from "react"
import { graphql, QueryRenderer } from "react-relay"

import { BidFlowRenderer } from "lib/relay/QueryRenderers"
import renderWithLoadProgress from "lib/utils/renderWithLoadProgress"
import createEnvironment from "../../../relay/createEnvironment"

import { Flex } from "../Elements/Flex"
import { Sans12, Serif14, Serif16 } from "../Elements/Typography"

import { BiddingThemeProvider } from "../Components/BiddingThemeProvider"
import { Checkbox } from "../Components/Checkbox"

import BidFlow from "../../../Containers/BidFlow"
import { Input } from "../Components/Input"
import { BidResult } from "../Screens/BidResult"
import { ConfirmBidScreen } from "../Screens/ConfirmBid"
import { ConfirmFirstTimeBid } from "../Screens/ConfirmFirstTimeBid"
import { MaxBidScreen } from "../Screens/SelectMaxBid"

const testSaleArtworkID = "5ae73b417622dd026f0fe473"
const testArtworkID = "ran-hwang-ephemeral-blossom-pp"
const testSaleID = "cityarts-benefit-auction-2018"

const SelectMaxBidRenderer: React.SFC<any> = ({ render, saleArtworkID }) => {
  return (
    <QueryRenderer
      environment={createEnvironment()}
      query={graphql`
        query BidFlowSelectMaxBidRendererQuery($saleArtworkID: String!) {
          sale_artwork(id: $saleArtworkID) {
            ...SelectMaxBid_sale_artwork
          }
        }
      `}
      variables={{
        saleArtworkID,
      }}
      render={render}
    />
  )
}

const ConfirmBidScreenRenderer: React.SFC<any> = ({ render, saleArtworkID }) => {
  return (
    <QueryRenderer
      environment={createEnvironment()}
      query={graphql`
        query BidFlowConfirmBidScreenRendererQuery($saleArtworkID: String!) {
          sale_artwork(id: $saleArtworkID) {
            ...ConfirmBid_sale_artwork
          }
        }
      `}
      variables={{ saleArtworkID }}
      render={render}
    />
  )
}

storiesOf("Bidding")
  .add("Show bid flow", () => {
    return <BidFlowRenderer render={renderWithLoadProgress(BidFlow)} artworkID={testArtworkID} saleID={testSaleID} />
  })
  .add("Select Max Bid", () => (
    <SelectMaxBidRenderer render={renderWithLoadProgress(MaxBidScreen)} saleArtworkID={testSaleArtworkID} />
  ))
  .add("Confirm Bid", () => {
    return (
      <ConfirmBidScreenRenderer
        render={renderWithLoadProgress(ConfirmBidScreen, {
          bid: { display: "$20,000", cents: 2000000 },
        })}
        saleArtworkID={testSaleArtworkID}
      />
    )
  })
  .add("Confirm Bid (first time)", () => {
    return (
      <ConfirmFirstTimeBid
        sale_artwork={{
          sale: {
            id: "1",
          },
          artwork: {
            id: "1",
            title: "Morgan Hill (Prototype)",
            date: "1973",
            artist_names: "Lewis balts",
          },
          lot_label: "1",
        }}
        bid={{ display: "$45,000", cents: 4500000 }}
      />
    )
  })
  .add("Bidding Result (winning)", () => {
    return <BidResult winning />
  })
  .add("Bidding Result (not highest bid)", () => {
    const messageHeader = "Your bid wasn’t high enough"
    const messageDescriptionMd = `Hello Hello [Your](http://example.com) bid didn’t meet the reserve price for this work.

Bid again to take the lead.`

    return <BidResult winning={false} message_header={messageHeader} message_description_md={messageDescriptionMd} />
  })

storiesOf("App Style/Input")
  .add("Text Input", () => (
    <BiddingThemeProvider>
      <Flex mt={7} ml={4} mr={4}>
        <Serif16 mb={2}>Title</Serif16>
        <Input placeholder="Placeholder" mb={5} />

        <Serif16>Title</Serif16>
        <Serif14 mb={2} color="black60">
          Short description
        </Serif14>
        <Input placeholder="Placeholder" value="Content" mb={5} />

        <Input placeholder="Without Title" mb={5} />

        <Serif16 mb={2}>Error</Serif16>
        <Input error placeholder="Placeholder" mb={3} />
        <Sans12 color="red100">Error message</Sans12>
      </Flex>
    </BiddingThemeProvider>
  ))
  .add("Check Boxes", () => (
    <BiddingThemeProvider>
      <Flex mt={7}>
        <Checkbox pl={3} pb={1}>
          <Serif16 mt={2}>Remember me</Serif16>
        </Checkbox>

        <Checkbox pl={3} pb={1} checked>
          <Serif16 mt={2}>Remember me</Serif16>
        </Checkbox>

        <Checkbox pl={3} pb={1} error>
          <Serif16 mt={2} color="red100">
            Agree to Terms and Conditions
          </Serif16>
        </Checkbox>

        <Checkbox pl={3} pb={1} checked error>
          <Serif16 mt={2} color="red100">
            Agree to Terms and Conditions
          </Serif16>
        </Checkbox>

        <Checkbox pl={3} pb={1} disabled>
          <Serif16 mt={2}>Remember me</Serif16>
        </Checkbox>

        <Checkbox pl={3} pb={1} checked disabled>
          <Serif16 mt={2}>Remember me</Serif16>
        </Checkbox>
      </Flex>
    </BiddingThemeProvider>
  ))
