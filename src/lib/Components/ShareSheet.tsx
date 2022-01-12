import { ContextModule, CustomService, OwnerType, share } from "@artsy/cohesion"
import Clipboard from "@react-native-community/clipboard"
import { InstagramStoryViewShot } from "lib/Scenes/Artwork/Components/InstagramStoryViewShot"
import { unsafe__getEnvironment } from "lib/store/GlobalStore"
import { Schema } from "lib/utils/track"
import { useCanOpenURL } from "lib/utils/useCanOpenURL"
import { InstagramAppIcon, LinkIcon, MoreIcon, ShareIcon, WhatsAppAppIcon } from "palette"
import React, { useRef } from "react"
import { ScrollView } from "react-native"
import Share, { ShareOptions } from "react-native-share"
import ViewShot from "react-native-view-shot"
import { useTracking } from "react-tracking"
import { CustomShareSheet, CustomShareSheetItem } from "./CustomShareSheet"
import { useToast } from "./Toast/toastHook"

interface ShareEntry {
  internalID: string
  slug: string
  href: string
  artistNames: string[]
  title?: string
  imageURL?: string
}

interface ShareSheetProps {
  visible: boolean
  entry: ShareEntry
  showWhatsapp?: boolean
  showInstagram?: boolean
  parentContextModule: ContextModule
  sharingEntryContextModule: ContextModule
  ownerType: OwnerType
  setVisible: (isVisible: boolean) => void
}

export const getShareURL = (href: string) => {
  return `${unsafe__getEnvironment().webURL}${href}`
}

export const getShareMessage = (artistNames: string[], title?: string) => {
  const names = artistNames.slice(0, 3).join(", ")

  if (title) {
    return `${title} by ${names} on Artsy`
  }

  return `${names} on Artsy`
}

const getBase64Data = async (viewShot: ViewShot) => {
  const base64RawData = await viewShot.capture!()
  const base64Data = `data:image/png;base64,${base64RawData}`

  return base64Data
}

export const ShareSheet: React.FC<ShareSheetProps> = (props) => {
  const {
    visible,
    entry,
    parentContextModule,
    sharingEntryContextModule,
    ownerType,
    showWhatsapp = true,
    showInstagram = true,
    setVisible,
  } = props
  const toast = useToast()
  const { trackEvent } = useTracking()
  const shotRef = useRef<ViewShot>(null)
  const canOpenWhatsapp = useCanOpenURL("whatsapp://send?phone=+491898")
  const canOpenInstagram = useCanOpenURL("instagram://user?username=instagram")

  const handleShareOnWhatsAppPress = async () => {
    try {
      const url = getShareURL(entry.href)
      const message = getShareMessage(entry.artistNames, entry.title)
      const event = tracks.share(sharingEntryContextModule, ownerType, entry, CustomService.whatsapp)

      await Share.shareSingle({
        social: Share.Social.WHATSAPP,
        message: message ?? "",
        url,
      })

      trackEvent(share(event))
    } catch (error) {
      console.log(error)
    } finally {
      setVisible(false)
    }
  }

  const handleShareOnInstagramStoryPress = async () => {
    try {
      const base64Data = await getBase64Data(shotRef.current!)
      const event = tracks.share(sharingEntryContextModule, ownerType, entry, CustomService.instagram_stories)

      await Share.shareSingle({
        social: Share.Social.INSTAGRAM_STORIES,
        backgroundImage: base64Data,
      })
      trackEvent(share(event))
    } catch (error) {
      console.log(error)
    } finally {
      setVisible(false)
    }
  }

  const handleMorePress = async () => {
    trackEvent({
      action_name: Schema.ActionNames.Share,
      action_type: Schema.ActionTypes.Tap,
      context_module: parentContextModule,
    })

    try {
      const url = getShareURL(entry.href)
      const message = getShareMessage(entry.artistNames, entry.title)
      const shareOptions: ShareOptions = {
        title: message,
        message: message + "\n" + url,
      }

      if (entry.imageURL && shotRef.current) {
        const base64Data = await getBase64Data(shotRef.current)

        shareOptions.url = base64Data
      }

      const res = await Share.open(shareOptions)
      const event = tracks.share(sharingEntryContextModule, ownerType, entry, res.message)

      trackEvent(share(event))
    } catch (error) {
      console.log(error)
    } finally {
      setVisible(false)
    }
  }

  const handleCopyLinkPress = () => {
    const clipboardLink = getShareURL(entry.href)
    const event = tracks.share(sharingEntryContextModule, ownerType, entry, CustomService.copy_link)

    setVisible(false)
    Clipboard.setString(clipboardLink)
    toast.show("Copied to Clipboard", "middle", { Icon: ShareIcon })
    trackEvent(share(event))
  }

  return (
    <CustomShareSheet visible={visible} setVisible={setVisible}>
      <ScrollView>
        {entry.imageURL ? (
          <InstagramStoryViewShot
            shotRef={shotRef}
            href={entry.imageURL}
            artist={entry.artistNames.join(", ")}
            title={entry.title}
          />
        ) : null}

        {showWhatsapp && canOpenWhatsapp ? (
          <CustomShareSheetItem title="WhatsApp" Icon={<WhatsAppAppIcon />} onPress={handleShareOnWhatsAppPress} />
        ) : null}

        {entry.imageURL && showInstagram && canOpenInstagram ? (
          <CustomShareSheetItem
            title="Instagram Stories"
            Icon={<InstagramAppIcon />}
            onPress={handleShareOnInstagramStoryPress}
          />
        ) : null}

        <CustomShareSheetItem title="Copy link" Icon={<LinkIcon />} onPress={handleCopyLinkPress} />
        <CustomShareSheetItem title="More" Icon={<MoreIcon />} onPress={handleMorePress} />
      </ScrollView>
    </CustomShareSheet>
  )
}

export const tracks = {
  share: (contextModule: ContextModule, ownerType: OwnerType, entry: ShareEntry, service: string) => ({
    context_module: contextModule,
    context_owner_type: ownerType,
    context_owner_id: entry.internalID,
    context_owner_slug: entry.slug,
    service,
  }),
}
