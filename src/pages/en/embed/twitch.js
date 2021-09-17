import React from 'react'
import StreamCard from '../../../components/StreamCard'
import { Helmet } from 'react-helmet'

const Page = () => (
    <>
        <Helmet>
            <style>{`body{background: transparent;}`}</style>
        </Helmet>
        <StreamCard lang="en" />
    </>   
)

export default Page
