import React from 'react'
import Routes from '../routes/index';
import Header from '../../node_modules/mineko-design/src/header/Header'
import MediaBanner from '../../node_modules/mineko-design/src/trust/MediaBanner'

function action() {
    console.log('header action')
}

const App = () => (
    <div>
        <div className="header">
            <Header
                trustText="Sehr gut 4,77 von 5 | 181 Bewertungen"
                trustOnClick={action}
                text="Jetzt hochladen, Prüfergebnis spätestens am 17.11.…"
                headerOnClick={action}
            />
        </div>

        <Routes />

        <MediaBanner text="Bekannt aus:" />
    </div>
)

export default App
