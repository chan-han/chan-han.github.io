import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/nav";

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
        <Nav/>
      <main className={styles.main}>

        <h1 className={styles.title}>
        공사중 입니다.
        </h1>

        <p className={styles.description}>
          리액트 NEXT 공부용으로 연습중입니다.
          <code className={styles.code}>pages/index.js</code>
        </p>


      </main>


    </div>
  )
}
