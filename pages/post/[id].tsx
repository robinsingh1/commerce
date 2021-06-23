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
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyB7SnAHuew4550eCG0rAMvS3637HcYDREg',
  authDomain: 'dryp-e44a9.firebaseapp.com',
  databaseURL: 'https://dryp-e44a9.firebaseio.com',
  projectId: 'dryp-e44a9',
  storageBucket: 'dryp-e44a9.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: '1:979226334513:web:aca5a43ef25fbcdee48c10',
  measurementId: 'G-MEASUREMENT_ID',
}
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}

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
