import type { GetStaticPropsContext } from 'next'
import { Heart } from '@components/icons'
import { Layout } from '@components/common'
import { Text, Container } from '@components/ui'
import { defaultPageProps } from '@lib/defaults'
import { getConfig } from '@framework/api'
import { useCustomer } from '@framework/customer'
import { WishlistCard } from '@components/wishlist'
import useWishlist from '@framework/wishlist/use-wishlist'
import getAllPages from '@framework/common/get-all-pages'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  // Disabling page if Feature is not available
  if (!process.env.COMMERCE_WISHLIST_ENABLED) {
    return {
      notFound: true,
    }
  }

  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: {
      pages,
      ...defaultPageProps,
    },
  }
}

export default function Wishlist() {
  const { data: customer } = useCustomer()
  // @ts-ignore Shopify - Fix this types
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })

  return <Container>Post</Container>
}

Wishlist.Layout = Layout
