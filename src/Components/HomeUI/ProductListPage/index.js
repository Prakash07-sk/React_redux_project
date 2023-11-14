import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isPageLoading, getProductList } from '../../../Redux/Store/ProductListDetails/ProductListDetails.selector';
import PageLoader from '../../Constent/PageLoader';
import CardView from './CardView';
import ReactPaginate from 'react-paginate';
import CatagoryListComponent from './CatagoryListComponent';
import { useState } from 'react';

export default () => {

    const isLoading = useSelector(isPageLoading);
    const productList = useSelector(getProductList);
    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 12;
    const pageCount = Math.ceil(productList.length / PER_PAGE);

    const offset = currentPage * PER_PAGE;
    const currentPageData = productList.slice(offset, offset + PER_PAGE);


    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return (
        <>
            <Container fluid className='m-3'>
                <CatagoryListComponent />
                {isLoading || productList.length === 0 ? <PageLoader /> : (
                    <>
                        <div className='pageloader'>
                            {currentPageData.map(val => <CardView {...val} />)}

                        </div>
                        <Container>
                            <ReactPaginate
                                previousLabel={"←"}
                                nextLabel={"→"}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link"}
                                containerClassName={
                                    "pagination pagination justify-content-end mt-3 mx-5"
                                }
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                activeClassName={"active"}
                            />
                        </Container>
                    </>
                )}
            </Container>
        </>
    );
}