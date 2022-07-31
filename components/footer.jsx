import React from 'react'
import quotes from '../data/quotes'

const Footer = () => {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    return (
        <footer className="py-3 text-sm text-gray-500 border-t border-gray-600">
            <p className="px-4 max-w-3xl mx-auto">{randomQuote}</p>
        </footer>
    )
}

export default Footer
