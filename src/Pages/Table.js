import React from 'react'
import { usePagination, useSortBy, useTable } from 'react-table'

const Table = ({ data, columns }) => {
    const { getTableProps, headerGroups, rows, prepareRow, getTableBodyProps, gotoPage, previousPage, nextPage, pageCount } = useTable({
        data,
        columns
    },
        useSortBy,
        usePagination
    )

    const { pageIndex, pageSize } = state
    return (
        <div className='table-border'>
            <table {...getTableProps()} >
                <thead>
                    {
                        headerGroups.map((headerGroup) => {
                            return <tr{...headerGroup.getHeaderGroupProps()} >
                                {
                                    headerGroup.headers.map((column) => {
                                        return <th {...column.getHeaderProps()} >
                                            {column.render('Header')}
                                        </th>
                                    })
                                }
                            </tr>
                        })
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (<td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>)
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div style={{ display: 'flex' }}>
                <div>
                    <button onClick={() => gotoPage(0)}> {'<<'} </button>
                    <button onClick={previousPage}> {'<'} </button>
                    <button> <span>{pageIndex + 1}</span> </button>
                    <button onClick={nextPage}> {'>'} </button>
                    <button onClick={() => gotoPage(pageCount - 1)}> {'>>'} </button>
                </div>

                <span> showing {(pageIndex * pageSize) + 1} to {((pageIndex + 1) * pageSize)} records </span>


            </div>
        </div>
    )
}

export default Table