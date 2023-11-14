
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCatagory } from '../../../Redux/Store/ProductListDetails/ProductListDetails.selector';
import { display_text } from '../../Constent/configuration';
import { getProductByCategory } from '../Utils/searchProducts.util';

export default () => {

    const CategoryList = useSelector(getProductCatagory);
    const [selectedText, setSelectedText] = useState(null);
    const dispatcher = useDispatch();

    const {plist_catagory_optn} = display_text;


    const SearchCategory = (e) => {
        setSelectedText(e);
        dispatcher(getProductByCategory(e));
    };
    return (
        <>
            <Dropdown onSelect = {SearchCategory}>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    {selectedText ?? plist_catagory_optn}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {CategoryList.map(val => {
                        return <Dropdown.Item 
                        eventKey = {val}
                        >{val}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}