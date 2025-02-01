import React from 'react'
import { Outlet } from 'react-router-dom'
import Fresh from '@/components/fresh/Fresh'
import Read from '@/components/read/Read'
import Events from '@/components/events/Events'

const Layout = () => {
    return (
        <div>
            <Fresh />
            <Read />
            <Events />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout