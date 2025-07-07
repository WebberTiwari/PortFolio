import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const {
    name,
    description,
    tags = [],
    code,
    demo,
    image
  } = project;

  return (
    <div className='group relative flex flex-col items-center justify-center w-full overflow-hidden px-4 py-6 md:px-8 bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] rounded-lg border border-[#1a1443] shadow-2xl'>
      
      {/* SVG BG */}
      <div className="absolute left-0 top-0 opacity-40">
        {/* Your decorative SVG here */}
      </div>

      <h2 className='text-[#EFF3F4] text-xl font-semibold mb-4 text-center'>{name}</h2>

      <div className="mb-4">
        <Image
          src={image?.src || placeholder}
          alt={name}
          width={640}
          height={480}
          className="rounded-lg transition duration-500 group-hover:opacity-0 w-80 h-64 object-cover"
        />
      </div>

      <div className="flex items-center justify-between w-full px-4">
        <Link
          href={demo}
          target='_blank'
          className="flex items-center justify-center w-10 h-10 border-2 border-[#EFF3F4] rounded-full text-[#EFF3F4] transition hover:scale-110 hover:bg-[#231d4b] hover:text-violet-600"
        >
          <FaPlay />
        </Link>

        <Link
          href={code}
          target='_blank'
          className="flex items-center justify-center w-10 h-10 border-2 border-[#EFF3F4] rounded-full text-[#EFF3F4] transition hover:scale-110 hover:bg-[#231d4b] hover:text-violet-600"
        >
          <FaCode />
        </Link>
      </div>

      {/* Hidden Description */}
      <p className="absolute top-1/2 left-0 w-[90%] md:w-[85%] translate-x-[-110%] translate-y-[-50%] group-hover:translate-x-0 transition duration-700 bg-[#0f0b24] p-4 rounded-r-lg text-[#EFF3F4] text-sm">
        {description}
      </p>

      {/* Tags */}
      <div className='absolute bottom-4 right-0 translate-x-full group-hover:translate-x-0 transition duration-500 bg-[#0f0b24] p-3 rounded-l-lg flex flex-col gap-2 text-[#EFF3F4] text-xs'>
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;
