import React from "react";
import "./styles.css"
import { useDispatch,useSelector } from "react-redux";
import { deleteMultipleData, setPage } from "../Redux/Actions";
export const Footer = ({multiple_delete_ids}) => {
  // console.log(multiple_delete_ids)
  const filterData = useSelector((store) => store.filterData)
  const page = useSelector((store) => store.page)

  const dispatch = useDispatch()
  const number_of_data = 10;
  const max_page = Math.ceil(filterData.length / number_of_data)
  const min_page = 1;
  const double_move = 2;
  const single_move = 1;
  const onMultipleDelete = () => {
    dispatch(deleteMultipleData(multiple_delete_ids))
  }

  const handleSetPage = (e) => {
    let newPage = +e.target.value;
    dispatch(setPage(newPage))
    // console.log(newPage)
  }

  const handleMovePage = (move_count) => {
    let newPage = move_count + page;
    dispatch(setPage(newPage))
  }
  return (
    <div className="buttonDiv">
      <button 
          onClick={onMultipleDelete}  
          className="deleteBtn">
            Delete Selected</button>
      <div className="circularBtnDiv">
      <button
          onClick={()=>handleMovePage(-double_move)}
          disabled = {page - double_move < min_page}
          className="circularBtn">{"<<"}</button>
      <button
          onClick={()=>handleMovePage(-single_move)}
          disabled = {page - single_move < min_page}
          className="circularBtn">{"<"}</button>
      {Array.from({length: max_page}, (v, i) => <button
          onClick={handleSetPage}
          className={page == i+1  ? "selectedPage " : "circularBtn"}
          value={i+1}>{i+1}</button>)}
      <button disabled = {page + single_move > max_page} onClick={()=>handleMovePage(single_move)} className="circularBtn">{">"}</button>
      <button disabled = {page + double_move > max_page} onClick={()=>handleMovePage(double_move)} className="circularBtn">{">>"}</button>
      </div>
    </div>
  );
};
