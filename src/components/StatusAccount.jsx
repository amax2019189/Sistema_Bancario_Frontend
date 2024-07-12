import React from 'react'
import { ActivateAccount } from './accounts/ActivateAccount'
import { DeactivateAccount } from './accounts/DesactivatedAccount'
import Sidebar from './sidebar/Sidebar'

function StatusAccount() {
    return (
        <>
            <Sidebar />
            <div className='ml-80 p-nonel flex flex-col'>
                <div className='p-9 sm:p-[5rem] lg:flex-auto mb-[3rem]'>
                    <h3 className="text-[3rem] font-bold tracking-tight text-gray-900 mb-[3rem] text-center">Mi estado de cuenta</h3>
                    <br />
                    <ActivateAccount />
                </div>
            </div>
        </>

    )
}

export default StatusAccount