import React from 'react'
import { AccountBalance } from '../../components/accountBalance/AccountBalance'

function AccountSection() {
    return (
        <div className="bg-white py-24 sm:py-32 mt-[-45px]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800  lg:text-4xl ">Bienvenido a nuestro Sistema crediticio</h1>
                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                        </div>
                    </div>
                </div>
                <AccountBalance />
            </div>
        </div>)
}

export default AccountSection