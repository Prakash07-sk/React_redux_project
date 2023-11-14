import { display_text } from "../../Constent/configuration";
import { BsFacebook, BsAndroid2, BsApple } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { BiLogoSnapchat, BiLogoTiktok } from 'react-icons/bi';

export default () => {

    const { footer_content, Lsocial, Lplatform } = display_text;
    return (
        <footer className="footer">
            <div className="container row">
                {footer_content.map((val, index) => (
                    <div className="col-md-3" key={index}>
                        <h4>{val?.title}</h4>
                        <ul>
                            {val?.links.map((res, subIndex) => (
                                <li key={subIndex}>{res}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>{Lsocial}</h4>
                            <ul className="nav">
                                <li className="nav-item mx-1">
                                    <BsFacebook />
                                </li>
                                <li className="nav-item mx-1">
                                    <AiFillTwitterCircle />
                                </li>
                                <li className="nav-item mx-1">
                                    <AiFillInstagram />
                                </li>
                                <li className="nav-item mx-1">
                                    <BiLogoTiktok />
                                </li>
                                <li className="nav-item mx-1">
                                    <BiLogoSnapchat />
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4>{Lplatform}</h4>
                            <ul className="nav">
                                <li className="nav-item mx-1">
                                    <BsAndroid2 />
                                </li>
                                <li className="nav-item mx-1">
                                    <BsApple />
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 mt-3">
                            <h4>Sign UP</h4>
                            <span>
                                <div className="row">
                                    <div className="col-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your text"
                                        />
                                    </div>
                                    <div className="col-4">
                                    <button type="button" class="btn btn-dark btn-sm">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    );
}