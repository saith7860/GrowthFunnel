import { useGoogleLogin,GoogleLogin, googleLogout } from '@react-oauth/google';
const GoggleCalendar = () => {
    //ON SUCCESS
    const responseGoogle=(response)=>{
      console.log(response);
      
    }
    //ON FAILURE
    const responseError=(error)=>{
       console.log(error);
    }
    const login=useGoogleLogin({
        onSuccess:{responseGoogle},
        onError:{responseError},
        responseType:'code',
        accessType:'offline'
    })
  return (
    <>
     <button
      onClick={() => login()}
      className="px-6 py-3 bg-white text-black rounded-lg font-semibold flex items-center gap-2"
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
    </>
  )
}

export default GoggleCalendar;