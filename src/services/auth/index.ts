import { GoogleAuthProvider, getAuth, signInWithPopup, type UserCredential } from 'firebase/auth'
import App from '../firebase'

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

const AuthService = {
  async login(): Promise<UserCredential> {
    const auth = getAuth(App)
    auth.languageCode = 'it'
    try {
      const v = await signInWithPopup(auth, provider)
      return v
    } catch {
      throw Error('Problem with sign in')
    }
  }
}
export { AuthService }
