// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Pagination } from 'antd'
import './Pagination.css'

const _Pagination = ({ handlePaginationChange, currentPage, totalResults }) => {
    return (
        <div className="container pagination">
            <Pagination
                defaultCurrent={1}
                pageSize={20}
                current={currentPage}
                total={totalResults}
                onChange={handlePaginationChange}
                responsive
                showSizeChanger={false}
            />
        </div>
    )
}

export default _Pagination
