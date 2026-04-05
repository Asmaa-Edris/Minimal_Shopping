import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <p><FaRegCopyright /> {new Date().getFullYear()} MinimalShop. All rights reserved.</p>
        </footer>
    );
}