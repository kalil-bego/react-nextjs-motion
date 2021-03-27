import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Repositories = ({ repositories, organization }) => (
    <div className="repositories-container">
        <header className="repositories-header">
            <Link href="/">
                <a>Voltar</a>
            </Link>
            <h1>{organization.name}</h1>
            <img src={organization.avatar_url} />
        </header>
        <div>
            {repositories.map(repo => 
                <motion.section 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <header>
                        <Link href={repo.html_url}>
                            <a target="_blank">
                                <h1 key={repo.id}>{repo.name}</h1>
                            </a>
                        </Link>
                        <div>
                            <h1>{repo.stargazers_count}</h1>
                            <img src="https://www.flaticon.com/svg/vstatic/svg/2107/2107957.svg?token=exp=1616798937~hmac=a970dc9a5299f5902d4cc8493a391112" />
                        </div>
                    </header>
                </motion.section>
            )}
        </div>
    </div>
);

Repositories.getInitialProps = async () => {
    const repos = await fetch('https://api.github.com/orgs/bandtec/repos');
    const repositories = await repos.json();

    const orgs = await fetch('https://api.github.com/orgs/bandtec');
    const organization = await orgs.json();

    return { repositories, organization};
};

export default Repositories;