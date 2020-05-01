import useSwr from 'swr'
import Link from 'next/link'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
          <a>
          <img style={{
            borderRadius: '50%',
            width: 30,
            height: 30
          }} src="https://images.viblo.asia/avatar/8d02d829-56f6-4724-b725-a8007429c245.jpg" srcset="https://images.viblo.asia/avatar-retina/8d02d829-56f6-4724-b725-a8007429c245.jpg 2x" alt="Avatar" class="avatar avatar--lg"></img>
            <blink>{user.fullName}</blink>
            <i>({user.id})</i>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
