import useSwr from 'swr'
import Link from 'next/link'
import { Alert } from 'react-bootstrap';
const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      {data.map(user => (
          <Link href="/user/[id]" as={`/user/${user.id}`}>
          <div>
          {[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
))}
          </div>
          </Link>
      ))}
    </>
  )
}
