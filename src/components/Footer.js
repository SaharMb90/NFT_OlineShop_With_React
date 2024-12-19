import FacebookIcon from "../../src/assets/icons/facebook.png";
import TWITTERIcon from "../../src/assets/icons/TWITTER.png";
import DISCORDIcon from "../../src/assets/icons/DISCORD.png";
import InstagramIcon from '../../src/assets/icons/INSTAGRAM.png'

export default function Footer() {

    return (
        <>
            <footer className="grid grid-cols-2 items-center py-5 w-full footer" >
                <div className="text-left font-extrabold  pl-10">
                    <h2 className="text-xl">MARCKETPLACE.</h2>
                </div>
                <div className="text-right pr-10 flex justify-end space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src={FacebookIcon}
                            alt="Facebook"
                            className="w-2 hover:opacity-80"
                        />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src={TWITTERIcon}
                            alt="Twitter"
                            className="w-4 hover:opacity-80"
                        />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src={DISCORDIcon}
                            alt="LinkedIn"
                            className="w-4 hover:opacity-80"
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src={InstagramIcon}
                            alt="Instagram"
                            className="w-4 hover:opacity-80"
                        />
                    </a>

                </div>
            </footer>

        </>
    )
}