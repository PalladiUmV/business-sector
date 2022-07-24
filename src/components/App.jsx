import "../App.scss";

import { Table } from "./Table/Table.jsx";
import { SearchPanel } from "./SearchPanel/SearchPanel";
import { TablePagination } from "./TablePagination/TablePagination";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";


export default function App() {

  const data = useSelector(({ data }) => data)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(10)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    const getData = async () => {
      dispatch({
        type: 'DATA_REQUEST',
      })
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      dispatch({
        type: 'DATA_SUCCESS',
        payload: res.data,
      })
    }
    getData()
  }, [])


  useEffect(() => {
    navigate(`/${currentPage}`)
  }, [currentPage])


  const lastIndex = currentPage * dataPerPage
  const firstIndex = lastIndex - dataPerPage
  const currentData = data?.slice(firstIndex, lastIndex)
  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  return (
    <div className='main'>
      <SearchPanel />
      <div>
        <Table data={currentData} />
        <TablePagination
          dataPerPage={dataPerPage}
          totalData={data?.length}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
