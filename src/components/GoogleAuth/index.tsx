import { useEffect, useState } from 'react';
import axios from 'axios';
import { TokenResponse, googleLogout, useGoogleLogin } from '@react-oauth/google';

import './style.scss';

interface IProfile {
  email: string;
  family_name: string;
  given_name: string;
  id: number;
  locale: string;
  name: string;
  picture: string;
  verified_email: true;
}

export const GoogleAuth = () => {
  const [user, setUser] = useState<Omit<
    TokenResponse,
    'error' | 'error_description' | 'error_uri'
  > | null>(null);
  const [profile, setProfile] = useState<IProfile | null>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => {
      throw new Error(`Login Failed: ${(error as Error).message}`);
    },
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    }
  }, [user]);

  return (
    <div className="google-auth">
      {profile ? (
        <div className="google-auth__profile">
          <img className="google-auth__profile-image" src={profile.picture} alt="user" />
          <div className="google-auth__profile-block">
            <p className="google-auth__profile-text">{profile.name}</p>
            <p className="google-auth__profile-text google-auth__profile-text_small">
              {profile.email}
            </p>
          </div>
          <button className="google-auth__button" type="button" onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        <button className="google-auth__button" type="button" onClick={() => login()}>
          Sign in with Google 🚀
        </button>
      )}
    </div>
  );
};
