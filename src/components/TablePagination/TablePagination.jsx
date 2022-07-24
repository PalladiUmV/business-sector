import "./TablePagination.scss";

export const TablePagination = ({ dataPerPage, totalData, paginate, nextPage, prevPage, currentPage }) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <div className="table-pagination">
            <button
                className='table-pagination__button'
                disabled={currentPage === 1}
                style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}
                onClick={prevPage}
            >
                Назад
            </button>

            <ul className="table-pagination__list">
                {
                    pageNumbers.map(number => {
                        return <li className="list__item" key={number}>
                            <span className={currentPage === number ? "active-page" : 'abc'}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </span>
                        </li>
                    })
                }
            </ul>

            <button
                className='table-pagination__button'
                disabled={currentPage === 10}
                style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}
                onClick={nextPage}
            >
                Далее
            </button>

        </div >
    )
}