import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './as';
import { Profile } from './as';
import { Bio } from './as';
import { Parentcomponent } from './as';
import { Childcomponet } from './as';
// import { Test } from './as';
 


 

// const inter = Inter({ subsets: ['latin'] })

// // export default function Home() {
// //   return (
// //     <>
// //       <Head>
// //         <title>Create Next App</title>
// //         <meta name="description" content="Generated by create next app" />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>
// //       <main className={styles.main}>
// //         <div className={styles.description}>
// //           <p>
// //             Get started by editing&nbsp;
// //             <code className={styles.code}>pages/index.js</code>
// //           </p>
// //           <div>
// //             <a
// //               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               By{' '}
// //               <Image
// //                 src="/vercel.svg"
// //                 alt="Vercel Logo"
// //                 className={styles.vercelLogo}
// //                 width={100}
// //                 height={24}
// //                 priority
// //               />
// //             </a>
// //           </div>
// //         </div>

// //         <div className={styles.center}>
// //           <Image
// //             className={styles.logo}
// //             src="/next.svg"
// //             alt="Next.js Logo"
// //             width={180}
// //             height={37}
// //             priority
// //           />
// //           <div className={styles.thirteen}>
// //             <Image
// //               src="/thirteen.svg"
// //               alt="13"
// //               width={40}
// //               height={31}
// //               priority
// //             />
// //           </div>
// //         </div>

// //         <div className={styles.grid}>
// //           <a
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// //             className={styles.card}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <h2 className={inter.className}>
// //               Docs <span>-&gt;</span>
// //             </h2>
// //             <p className={inter.className}>
// //               Find in-depth information about Next.js features and&nbsp;API.
// //             </p>
// //           </a>

// //           <a
// //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// //             className={styles.card}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <h2 className={inter.className}>
// //               Learn <span>-&gt;</span>
// //             </h2>
// //             <p className={inter.className}>
// //               Learn about Next.js in an interactive course with&nbsp;quizzes!
// //             </p>
// //           </a>

// //           <a
// //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// //             className={styles.card}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <h2 className={inter.className}>
// //               Templates <span>-&gt;</span>
// //             </h2>
// //             <p className={inter.className}>
// //               Discover and deploy boilerplate example Next.js Ali baba ZAin &nbsp;projects.
// //             </p>
// //           </a>

// //           <a
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// //             className={styles.card}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <h2 className={inter.className}>
// //               Deploy <span>-&gt;</span>
// //             </h2>
// //             <p className={inter.className}>
// //               Instantly deploy your Next.js site to a shareable URL
// //               with&nbsp;Vercel.
// //             </p>
// //           </a>
// //         </div>
// //       </main>
// //     </>
// //   )
// // }
// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }
function Ali()
{
  return(
    <div>

        <h1>Component 1 </h1>
        <p> This is first time  I created a component </p>
        </div>
  );
}
 function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function TodoList1() {
  return (
    <div style={person.theme}>
      <h1>{person.name}  Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div>
    <Ali/>
    <h1>Component 2</h1>
    <TodoList />
    <h1>Importing picture from as.js file .</h1>
    <Profile />
    {/* <Gallery/> */}
    <h1>Use Of JSX Extension inside React Component and Function.</h1>
    <Bio />
    <p>Passing js oject using double curly braces inside jsx.</p>
    <TodoList1 />
    <h3>Here Is the Example of Props :</h3>
    <Parentcomponent />
    <Childcomponet />
    <h3>Usage of state for managing data within class component :</h3>
    {/* <Test /> */}
    <h3>We can update by using setstate Fucnton :</h3>
    </div>
     
  );
}


 


