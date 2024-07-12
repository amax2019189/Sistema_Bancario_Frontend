import React from 'react'

function ButtonBanck() {
    return (
        <div className="flex items-end justify-end fixed bottom-5 right-4 mb-4 mr-4 z-10">
            <div>
                <a
                    title="Transferir"
                    href={"https://www.instagram.com/jose_braulio/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-20 h-20 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                >
                    <img
                        className="object-cover object-center w-full h-full rounded-full"
                        src="./src/assets/money.svg"
                        alt="Transeferir"
                    />
                </a>
            </div>
        </div>)
}

export default ButtonBanck