import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
const AuthButton = () => {
    const router = useRouter()
    const successLogin = credentialResponse => {
        // Post auth data to server side
        // get Token...
        const token = "asdfasfsdfgdsfgdsf..dslfgjkdsjfg"
        const cookieStore = new Cookies(null, {path:"/"})
        cookieStore.set("loginToken", token)
        router.push("/userpanel")
        const userInfo = jwtDecode(credentialResponse.credential)
        console.log(userInfo);
    }
    const catchLogin = () => {
        console.log('Login Failed');
    }

    return (
        <GoogleLogin onSuccess={successLogin} onError={catchLogin} />
    );
};

export default AuthButton;