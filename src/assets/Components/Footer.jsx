import logo from '../../../public/logo.png'

const Footer = () => {
    return (

        <div className='md:pb-10 md:px-10 '>
            <div className=' shadow-2xl py-10'>

                <footer className="footer ">
                    <aside>
                        <img className='w-[200px] ' src={logo} alt="" />
                    </aside>
                    <nav className='font-extrabold px-10 md:px-0 text-[#80107B]'>
                        <header className="footer-title ">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Security</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='font-extrabold px-10 md:px-0 text-[#80107B]'>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='font-extrabold px-10 md:px-0 text-[#80107B]'>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>

                <footer className="footer footer-center p-4 font-extrabold text-[16px] md:text-xl text-[#522ba0] mt-2">
                    <aside>
                        <p>Copyright © 2023 - All right reserved by Serch Job</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;