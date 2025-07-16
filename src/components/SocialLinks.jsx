import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialLinks = ({ layout = "center" }) => {
    const links = (
        <>
            <a 
                href="https://github.com/Chillon-hub"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className='text-2xl hover:text-blue-500 transition-transform hover:scale-110'
            >
                <FaGithub />
            </a>
            <a 
                href="https://www.linkedin.com/in/chillon-rigonan-b2235a357"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Linkedin Profile"
                className='text-2xl hover:text-blue-500 transition-transform hover:scale-110'
            >
                <FaLinkedin />
            </a>
        </>
    );

    if (layout === "center") {   
        return (
          <div className='flex gap-4 justify-center items-center mt-4'>
            {links}
          </div>
        );
    };

    if (layout === "side") {
        return (
            <>
                <div className='hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-4'>
                    {links}
                </div>

                <div className="flex lg:hidden justify-center gap-6 mt-4">
                    {links}
                </div>
            </>
        );
    };

    return null;
}

export default SocialLinks