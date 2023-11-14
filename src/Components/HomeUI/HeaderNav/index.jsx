import { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav, FormControl, Container } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBasket2 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { display_text } from '../../Constent/configuration';
import { GetProductBySearch } from '../Utils/searchProducts.util';

export default () => {

    const {navList_basket, navlinkList_text, nav_bannertext1, nav_bannertext2, logo_title,  nav_bannertext3} = display_text;

    const dispatcher = useDispatch();

    const GetProductLists = (payload) => {
        let timer;

        clearTimeout(timer);

        timer = setTimeout(() => {
            dispatcher(GetProductBySearch(payload));
        }, [1000])

    };


    return (
        <Container>

            <Navbar className="navbar justify-content-between">
                <Container fluid>
                    <Navbar.Brand className='fw-bold navbar__logo' data-last-letter="M">{logo_title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-content-center'>
                        <div class="navbar__form">
                            <FormControl
                                class="form-control-lg navbar__form-input"
                                placeholder="What do you want to buy today?"
                                aria-label="Search"
                                onChange={(e) => GetProductLists(e?.target?.value)}
                                aria-describedby="search-input"
                            />
                            <span class="navbar__form-icon"><AiOutlineSearch /></span>
                        </div>
                        <Nav className="ml-auto d-flex justify-content-around">
                            {navlinkList_text.map(val =><Nav.Link className="mr-2" key={val}>{val}</Nav.Link> )}
                            <Nav.Link className="mr-2 ">
                                <span style={{ fontWeight: 700 }}>
                                    {navList_basket} <BsBasket2 />
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Container fluid>
                <div className='navbar__header-card'>
                    <div>
                        <strong>
                            {nav_bannertext1}
                        </strong>
                    </div>
                    <span className='navbar__header-card-subheading'>
                      {nav_bannertext2}  <strong style={{color: 'white'}}>{nav_bannertext3}</strong>
                    </span>
                </div>
            </Container>

        </Container>

    );
}

