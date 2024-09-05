import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center flex-col justify-center ">
    
      <Image src="/picture/fb pic.svg"
        width={250}
        height={100}
        alt="facebook logo"
         />

      <div className="bg-white flex flex-col items-center py-6 mb-40 rounded-xl w-1/3 shadow-2xl">
        <p className="text-center text-lg ">Log in to Facebook</p>
        <input className="w-96 focus-outline-1 outline-blue-600 my-2 border border-1 border-gray-100 p-2 rounded-md" type="text" placeholder="Email address or phone number"/>
        <input className="w-96 focus-outline-1 outline-blue-600 my-2 border border-1 border-gray-100 p-2 rounded-md" type="password" placeholder="password"/>
        <button className="w-96 bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">Log in</button>

        <p className="py-2 text-blue-500 text-sm "><Link className="hover:underline" href={"https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"}>
        Forgotten account?
        </Link>
        <span className="mr-4"></span>
        <Link className="hover:underline" href={" https://www.facebook.com/r.php?locale=en_GB&display=page"}>
        Sign up for Facebook
        </Link>
        </p> 
      </div>
     
    </div>
     ); 
}
