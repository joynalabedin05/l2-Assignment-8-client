import Image from 'next/image';
import notFound from "../assets/not-found.png";
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className='w-1/2 mx-auto my-14'>
            <Image src={notFound} width={600} height={500} alt='not-found'/>
            <button className="btn btn-primary mt-5"><Link href='/'>Home</Link></button>
        </div>
    );
};

export default NotFoundPage