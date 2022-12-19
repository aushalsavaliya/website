import React, { useEffect, useMemo, useState } from 'react'
import Table from './Table'
const Data = () => {

    const [ result , setresult ] = useState([])

    useEffect(() => {
        const p = fetch('https://jsonplaceholder.typicode.com/todos')
        p.then((dummy) => 
        dummy.json()
        ).then((dummy) => {
            setresult(dummy)
        }).catch((error) => {
            console.log(error);
        })
    })

    const columns = useMemo(() => [
        { 
            Header: 'ids',
            columns: [
                {
                    Header: 'Id',
                    accessor: 'id'
                },
                {
                    Header: 'user id',
                    accessor: 'userId'
                }
            ]
        },
        {
            Header: 'Datails',
            columns: [
                {
                    Header: 'Title',
                    accessor: 'title'
                },
                {
                    Header: 'Completed',
                    accessor: 'completed'
                }
            ]
        }

    ], [])

  return (
    <div>
        <div className='container'>
            Appoiment <br />

            <Table
                data={result}
                columns={columns}
            />

        </div>
    </div>
  )
}

export default Data