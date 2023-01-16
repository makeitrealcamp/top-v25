import { useEffect, useState } from "react"

import { getMyProfile } from '../services/user'

const ProfilePage = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getMyProfile()
      setProfile(profile)
    }
    fetchProfile()

  }, [])

  return(
    <div>
      <h1>Profile Page</h1>
      {profile && (
        <pre>
          {JSON.stringify(profile, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default ProfilePage
