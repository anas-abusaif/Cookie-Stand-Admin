import CookieStandAdmin from './cookies-stand-admin'
import CustomHead from './Head'


export default function Home() {
  return (
    <div>
      <CustomHead/>
      <div className='w-screen align-top bg-green-50'>
      <CookieStandAdmin/>
      </div>
    </div>
  )
}
