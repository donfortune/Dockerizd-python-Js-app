import React from 'react';
import '../../assets/scss/topnews.scss';
import { BsChevronRight } from 'react-icons/bs';
import { pick } from '../reusabledata';
import { Link } from 'react-router-dom';

const Midcap = () => {
    return (
        <div className="topNews__second top-components">
            <Link to="/mid">
                <span className="icon_span">
                    Mid cap <BsChevronRight />
                </span>
            </Link>
            {pick.map((data) => {
                return (
                    <div className="top__news-first" key={data.id}>
                        <aside>
                            <p>
                                Reuters <span>{data.time}</span>
                            </p>
                            <h3>{data.text}</h3>
                        </aside>
                        <aside>
                            <img src={data.image} alt="" />
                        </aside>
                    </div>
                );
            })}
        </div>
    );
};

export default Midcap;
