import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import { motion } from 'framer-motion';

const App = ({ organization }) => (
    <div className="app-container">
        <motion.section initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .9,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            },
        }}>
            <header key={organization.id}>
                <img src={organization.avatar_url} />
                <h1>{organization.name}</h1>
            </header>
            <main>
                <Link href="/repositories">
                    <a>Ver repositórios</a>
                </Link>
            </main>
        </motion.section>
    </div>
);

App.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/orgs/bandtec');
    const organization = await response.json();

    return { organization };
};

export default App;