import Link from 'next/link';
import icon from '../styles/icon.png';
import Head from 'next/head';



export default function Home() {
    return (
        <div style={pageStyle}>
           <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <div style={contentStyle}>
                <Link href="/business">
                    <div style={tabStyle}>
                    <span><img src={icon.src} alt="icon" style={iconStyle} /></span>
                        Business
                    </div>
                </Link>
            </div>
        </div>
    );
}

const pageStyle = {
    margin: 20,
    padding: 20
};

const contentStyle = {
    maxWidth: '600px',
    margin: '0 auto'
};

const tabStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px 10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontFamily: 'Roboto, sans-serif'
};

const iconStyle = {
  margin: '10px 0',
  width: '24px',
  height: '24px',
  marginRight: '10px'
};
