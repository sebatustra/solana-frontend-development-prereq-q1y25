import dynamic from 'next/dynamic';

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

const Navbar = () => {
    return (
        <nav className='p-4 flex justify-between items-center bg-zinc-800'>
            <a href="/">
                <div className="relative">
                    <img src="/turbine-logo-text.svg" width="200" className="transition-transform duration-200 transform hover:scale-100 hover:cursor-pointer" alt="Helius logo" />
                </div>
            </a>

            <WalletMultiButtonDynamic className='!bg-turbine-green hover:!bg-black transition-all duration-200 !rounded-lg' />
        </nav>
    );
};

export default Navbar;