import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const today = new Date();

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - ECommerce' : 'ECommerce'}</title>
        <meta name="description" content="ECommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" legacyBehavior>
              <a href="" className="text-lg font-bold">
                ECommerce
              </a>
            </Link>
            <div>
              <Link href="/cart" legacyBehavior>
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © {today.getFullYear()} ECommerce</p>
        </footer>
      </div>
    </>
  );
}
