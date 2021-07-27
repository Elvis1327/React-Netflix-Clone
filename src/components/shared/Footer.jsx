import { React } from 'react';

export const Footer = () => {
    return (
        <div className="footer-netflix">
            <div className="creator-netflix">
                <h1>Creator:</h1>
                <h1>Created with love by Elvis <i class="fas heart fa-heart"></i></h1>
            </div>
            <div className="_netflix-footer-social-media">
                <h1>Social Media</h1>
                <ul>
                    <li>
                        <a href="##">
                            <i class="fab fa-facebook-f netflix-media"></i>
                        </a>
                    </li>
                    <li>
                        <a href="##">
                            <i class="fab fa-twitter netflix-media"></i>
                        </a>
                    </li>
                    <li>
                        <a href="##">
                            <i class="fab fa-instagram netflix-media"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


