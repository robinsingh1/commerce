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
import { InfluencerPostDetails } from '../../dripp-web/src/App'
import { useRouter } from 'next/router'

export default function Post() {
  const { data: customer } = useCustomer()
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })
  const router = useRouter()

  console.log(router)

  return (
    <Container>
      <InfluencerPostDetails query={router.query} />
    </Container>
  )
}
Post.getInitialProps = (options) => {
  return {}
}

Post.Layout = Layout
